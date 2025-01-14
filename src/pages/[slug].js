import Head from 'next/head';
import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image
import { getSEOData, getPosts } from '../services/api';
import { useState, useEffect } from 'react';

const BlogPost = ({ seoData, post: initialPost }) => {
  const [featuredImage, setFeaturedImage] = useState('/img/others/default-image.jpeg'); // Default image

  useEffect(() => {
    const fetchFeaturedImage = async () => {
      if (initialPost?._links?.['wp:featuredmedia']) {
        const mediaEndpoint = initialPost._links['wp:featuredmedia'][0].href;

        try {
          const mediaRes = await fetch(mediaEndpoint);
          const mediaData = await mediaRes.json();
          setFeaturedImage(mediaData.source_url || '/img/others/default-image.jpeg'); // Set the image or fallback
        } catch (err) {
          console.error('Error fetching featured image:', err);
        }
      }
    };

    fetchFeaturedImage();
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
          {initialPost ? (
            <div className="row">
              <div className="col-md-12 mb-4">
                {/* Use Image from next/image for optimized image loading */}
                <Image
                  src={featuredImage}
                  alt={initialPost.title.rendered || 'Blog Post'}
                  className="card-img-top"
                  width={1200} // Set the width of the image
                  height={675} // Set the height of the image (aspect ratio 16:9)
                  layout="responsive" // Make the image responsive
                />
                <div className="card-body">
                  <h1>{initialPost.title.rendered}</h1>
                  <div
                    className="post-content"
                    dangerouslySetInnerHTML={{
                      __html: initialPost.content.rendered, // Render the full HTML content of the post
                    }}
                  />
                  <Link href="/blog" className="btn btn-secondary">Back to Blog</Link> {/* Corrected Link usage */}
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
    fallback: false, // You can set this to true or 'blocking' depending on your preference
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Fetch SEO data for the specific post
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

  // Fetch the specific post using its slug
  const res = await getPosts({ slug });
  const post = res.data[0];

  return {
    props: {
      seoData,
      post,
    },
  };
}

export default BlogPost;
