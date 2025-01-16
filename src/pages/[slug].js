import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getSEOData, getPosts } from '../services/api';
import { useState, useEffect } from 'react';

const BlogPost = ({ seoData: initialSEOData, post: initialPost }) => {
  const [featuredImage, setFeaturedImage] = useState('/img/others/default-image.jpeg');
  const [post, setPost] = useState(initialPost);
  const [seoData, setSEOData] = useState(initialSEOData);

  // Fetch featured image
  useEffect(() => {
    const fetchFeaturedImage = async () => {
      if (post?._links?.['wp:featuredmedia']) {
        const mediaEndpoint = post._links['wp:featuredmedia'][0].href;

        try {
          const mediaRes = await fetch(mediaEndpoint);
          const mediaData = await mediaRes.json();
          setFeaturedImage(mediaData.source_url || '/img/others/default-image.jpeg');
        } catch (err) {
          console.error('Error fetching featured image:', err);
        }
      }
    };

    fetchFeaturedImage();
  }, [post]);

  // Dynamically fetch latest post data every 60 seconds or when it changes
  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const res = await getPosts({ slug: initialPost.slug });
        const latestPost = res.data[0];

        if (latestPost) {
          setPost(latestPost);

          // Update SEO data dynamically
          const latestSEOData = await getSEOData(latestPost.slug);
          setSEOData(latestSEOData);
        }
      } catch (error) {
        console.error('Error fetching latest post data:', error);
      }
    };

    // Fetch data every 60 seconds (or based on your requirement)
    const interval = setInterval(fetchLatestPost, 5000); // 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [initialPost]);

  return (
    <>
      <Head>
        <title>{seoData?.title || 'Blog Post'}</title>
        <meta name="description" content={seoData?.description || ''} />
        <meta name="keywords" content={seoData?.keywords || ''} />
        <meta property="og:image" content={seoData?.ogImage || ''} />
      </Head>
      <main id="main" className="site-main blog-post">
        <section className="container">
          {post ? (
            <div className="row">
              <div className="col-md-12 mb-4">
                <Image
                  src={featuredImage}
                  alt={post.title.rendered || 'Blog Post'}
                  className="card-img-top"
                  width={1200}
                  height={675}
                  layout="responsive"
                />
                <div className="card-body">
                  <h1>{post.title.rendered}</h1>
                  <div
                    className="post-content"
                    dangerouslySetInnerHTML={{
                      __html: post.content.rendered,
                    }}
                  />
                  <Link href="/blog" className="btn btn-secondary">
                    Back to Blog
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <p>No post found.</p>
          )}
        </section>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const res = await getPosts();
  const posts = res.data;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  let seoData = {
    title: 'Default Post Title',
    description: 'Default description for post',
    keywords: '',
    ogImage: 'default-image-url.jpg',
  };

  try {
    seoData = await getSEOData(slug, 'post');
  } catch (error) {
    console.error('Error fetching SEO data:', error);
  }

  const res = await getPosts({ slug });
  const post = res.data[0];

  return {
    props: {
      seoData,
      post,
      revalidate: 60,
    },
  };
}

export default BlogPost;
