import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BlogPreview = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Design",
      excerpt: "Exploring the latest trends and innovations shaping the digital landscape.",
      image: work1,
      date: "March 15, 2024",
      category: "Design"
    },
    {
      id: 2,
      title: "Building Scalable Applications",
      excerpt: "Best practices for creating robust and maintainable software solutions.",
      image: work2,
      date: "March 10, 2024",
      category: "Development"
    },
    {
      id: 3,
      title: "User Experience Matters",
      excerpt: "How thoughtful UX design can transform your digital products.",
      image: work3,
      date: "March 5, 2024",
      category: "UX/UI"
    }
  ];

  return (
    <section id="blog" ref={ref} className={`py-16 md:py-20 bg-muted/30 transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground relative">
                OUR <span className="relative">
                  LATEST
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground"></span>
                </span> INSIGHTS
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight mb-6">
              RECENT BLOG POSTS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest thoughts, insights, and innovations
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">•</span>
                    <span className="text-[10px] text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button 
              onClick={() => navigate('/blog')}
              size="lg"
              className="tracking-widest text-xs"
            >
              VIEW MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
