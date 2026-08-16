import React from 'react';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn best practices for structuring large React projects with proper state management and component architecture.',
      date: 'March 15, 2024',
      category: 'React',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Modern Web Performance Optimization',
      excerpt: 'Comprehensive guide to optimizing web performance including lazy loading, code splitting, and caching strategies.',
      date: 'March 10, 2024',
      category: 'Performance',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Full Stack Development with Next.js',
      excerpt: 'Explore how to build complete applications using Next.js with API routes, database integration, and authentication.',
      date: 'March 5, 2024',
      category: 'Next.js',
      readTime: '10 min read'
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <h2>Latest Articles</h2>
          <p>Tips, tricks, and insights on web development</p>
        </div>

        <div className="blog-grid">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="blog-card card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="blog-header">
                <span className="blog-category">{article.category}</span>
                <span className="blog-date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="blog-footer">
                <span className="read-time">{article.readTime}</span>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <p>Interested in more articles about web development?</p>
          <a href="#" className="btn btn-primary">View All Articles</a>
        </div>
      </div>

      <style jsx>{`
        .blog-section {
          padding: 6rem 2rem;
          background: var(--bg-secondary);
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto 4rem;
        }

        .blog-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .blog-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .blog-category {
          padding: 0.4rem 0.8rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent);
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .blog-date {
          font-size: 0.85rem;
          color: var(--text-light);
        }

        .blog-card h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .blog-card p {
          flex: 1;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }

        .blog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        .read-time {
          font-size: 0.85rem;
          color: var(--text-light);
          font-weight: 500;
        }

        .read-more {
          color: var(--accent);
          font-weight: 600;
          transition: var(--transition);
        }

        .read-more:hover {
          gap: 1rem;
        }

        .blog-cta {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .blog-cta p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .blog-section {
            padding: 4rem 1.5rem;
          }

          .blog-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .blog-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}