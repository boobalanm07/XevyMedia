import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getPosts, getSEOData } from '../../services/api';
import Image from 'next/image';
import { decode } from 'html-entities';

const BlogList = ({ posts: initialPosts, seoData: initialSEOData }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [error, setError] = useState(null);
  const [imageUrls, setImageUrls] = useState({});  // State to store the image URLs

  useEffect(() => {
    if (!initialPosts || initialPosts.length === 0) {
      // If no posts are passed as initial data, try to fetch them
      const fetchPosts = async () => {
        try {
          const res = await getPosts();
          setPosts(res.data || []);
        } catch (err) {
          setError('Error fetching posts');
        }
      };
      fetchPosts();
    }
  }, [initialPosts]);

  useEffect(() => {
    const fetchImages = async () => {
      const urls = {};

      for (const post of posts) {
        const imageUrl = await getFeaturedImage(post);
        urls[post.id] = imageUrl;
      }

      setImageUrls(urls);
    };

    if (posts.length > 0) {
      fetchImages();
    }
  }, [posts]);

  const getFeaturedImage = async (post) => {
    //console.log('Post object:', post); // Log the full post object for inspection
    
    // Check if there is a featured media link
    if (post._links && post._links['wp:featuredmedia']) {
      const mediaEndpoint = post._links['wp:featuredmedia'][0].href;
      
      try {
        // Fetch media details from the API
        const mediaRes = await fetch(mediaEndpoint);
        const mediaData = await mediaRes.json();
        
        // Get the source_url from the media details
        const featuredImageUrl = mediaData.source_url || '/img/others/default-image.jpeg'; // Fallback to default if not found
        //console.log("Featured Image URL: ", featuredImageUrl); // Log the URL for debugging
        return featuredImageUrl;
      } catch (err) {
        //console.error('Error fetching featured image:', err);
      }
    }
  
    // Fallback to default image if no featured image found
    return '/path/to/default-image.jpg';
  };  
  
  return (
    <>
      <Head>
        <title>{initialSEOData?.title || 'Blog'}</title>
        <meta name="description" content={initialSEOData?.description || ''} />
        <meta name="keywords" content={initialSEOData?.keywords || ''} />
        <meta property="og:image" content={initialSEOData?.ogImage || ''} />
      </Head>
      <main className="portfolio-inner">
        <section className="container">
          <h2 className="text-center my-5">Our Blog</h2>

          {/* Display error message if there is an error */}
          {error && <p className="text-danger">{error}</p>}

          <div className="row">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="col-md-4 mb-4">
                  <div className="card">
                    {/* Render post thumbnail (featured image) */}
                    {imageUrls[post.id] && (
                      <Image
                        src={imageUrls[post.id]} // Use the fetched image URL
                        alt={post.title.rendered}
                        className="card-img-top"
                        width={500} // Adjust the image width
                        height={300} // Adjust the image height
                        style={imageUrls[post.id] === '/img/others/default-image.jpeg' ? { objectFit: 'cover' } : {}}
                      />
                    )}
<div className="card-body">
  <div className="work-details">
    {/* Render post title */}
    <h3>{post.title.rendered}</h3>
    {/* Render post excerpt */}
    <p className="description">
      {decode(
        post.excerpt.rendered
          .replace(/<\/?[^>]+(>|$)/g, '') // Remove HTML tags
      )}
    </p>
    {/* Link to post */}
    <Link href={`/${post.slug}`} className="btn btn-primary">
      Read More
    </Link>
  </div>
</div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await getPosts();
    const posts = res.data || [];

    let seoData = {
      title: 'Default Title',
      description: 'Default description',
      keywords: '',
      ogImage: 'default-image-url.jpg',
    };

    try {
      seoData = await getSEOData('blog');
    } catch (seoError) {
      console.error('Failed to fetch SEO data:', seoError);
    }

    return {
      props: { posts, seoData },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
        seoData: {
          title: 'Blog',
          description: 'Stay updated with the latest articles.',
          keywords: '',
          ogImage: '',
        },
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  }
}

export default BlogList;
