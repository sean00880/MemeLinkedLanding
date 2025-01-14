export default function BlogPage() {
    const posts = [
      { title: 'How MemeLinked Integrates DeFi and Social Networking', href: '/blog/defi-social-networking' },
      { title: 'GameFi’s Role in the MemeLinked Ecosystem', href: '/blog/gamefi-role' },
      { title: 'The Future of Meme-Driven Finance', href: '/blog/meme-finance-future' },
    ];
  
    return (
      <section className="flex flex-col md:pl-10 lg:ml-[25%]">
        <h1 className="text-3xl font-bold mb-4">Welcome to the MemeLinked Blog</h1>
        <p className="mb-6">Explore our latest posts and insights about MemeLinked and the broader DeFi space...</p>
  
        {/* Blog Post Content */}
        <div className="blog-posts mt-8 space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="blog-post p-4 bg-gray-800 text-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-300">
                Dive into this article to explore how {post.title} influences the MemeLinked ecosystem. Discover the key
                aspects, benefits, and opportunities that this topic offers within the world of decentralized finance.
              </p>
              <a
                href={post.href}
                className="text-green-300 hover:text-green-200 mt-4 inline-block transition"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  