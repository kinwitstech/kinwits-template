import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock blog data - in a real app, this would be fetched based on the id
  const blogData: { [key: string]: any } = {
    '1': {
      title: "The Future of Web Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: work1,
      date: "March 15, 2024",
      category: "Design",
      author: "John Doe"
    },
    '2': {
      title: "Building Scalable Applications",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: work2,
      date: "March 10, 2024",
      category: "Development",
      author: "Jane Smith"
    },
    '3': {
      title: "User Experience Matters",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: work3,
      date: "March 5, 2024",
      category: "UX/UI",
      author: "Mike Johnson"
    }
  };

  const blog = blogData[id || '1'];

  if (!blog) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 lg:px-12 pt-32">
          <p>Blog post not found</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigate('/blog')}
              className="mb-8 -ml-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>

            {/* Blog Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                  {blog.category}
                </span>
                <span className="text-[10px] text-muted-foreground">•</span>
                <span className="text-[10px] text-muted-foreground">
                  {blog.date}
                </span>
                <span className="text-[10px] text-muted-foreground">•</span>
                <span className="text-[10px] text-muted-foreground">
                  By {blog.author}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
                {blog.title}
              </h1>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-12">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              {blog.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-border flex justify-center md:justify-start">
              <Button
                variant="outline"
                onClick={() => navigate('/blog')}
                className="tracking-widest text-xs"
              >
                VIEW MORE POSTS
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
