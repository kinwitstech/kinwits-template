import Navigation from '@/components/Navigation';
import { useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import work1 from '@/assets/work-1.jpg';
import work2 from '@/assets/work-2.jpg';
import work3 from '@/assets/work-3.jpg';
import work4 from '@/assets/work-4.jpg';
import work5 from '@/assets/work-5.jpg';
import work6 from '@/assets/work-6.jpg';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      image: work1,
      category: 'Development',
      title: 'The Future of Web Development in 2025',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      date: 'Jan 15, 2025',
      readTime: '5 min read'
    },
    {
      image: work2,
      category: 'Design',
      title: 'Minimalist Design Principles',
      excerpt: 'How less is more when it comes to creating impactful digital experiences.',
      date: 'Jan 10, 2025',
      readTime: '4 min read'
    },
    {
      image: work3,
      category: 'AI',
      title: 'AI in Modern Software Development',
      excerpt: 'Leveraging artificial intelligence to build smarter applications.',
      date: 'Jan 5, 2025',
      readTime: '6 min read'
    },
    {
      image: work4,
      category: 'Business',
      title: 'Digital Transformation Strategy',
      excerpt: 'A comprehensive guide to transforming your business digitally.',
      date: 'Dec 28, 2024',
      readTime: '8 min read'
    },
    {
      image: work5,
      category: 'Technology',
      title: 'Cloud Computing Best Practices',
      excerpt: 'Essential practices for building scalable cloud-based solutions.',
      date: 'Dec 20, 2024',
      readTime: '7 min read'
    },
    {
      image: work6,
      category: 'Development',
      title: 'Modern JavaScript Frameworks',
      excerpt: 'Comparing the most popular JavaScript frameworks in 2025.',
      date: 'Dec 15, 2024',
      readTime: '5 min read'
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
              Insights & Updates
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-8">
              OUR BLOG
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in technology, 
              design, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-4">
                Featured Article
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-4">
                  {blogPosts[0].category}
                </p>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  {blogPosts[0].title}
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button className="text-xs tracking-widest uppercase hover:underline inline-flex items-center gap-2 group">
                  READ MORE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                RECENT ARTICLES
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article 
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-3">
                    {post.category}
                  </p>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
