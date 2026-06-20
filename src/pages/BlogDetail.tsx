import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const BlogDetail = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 lg:px-12 pt-40 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <Button variant="ghost" onClick={() => navigate('/blog')} className="mb-12 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-6">
            COMING SOON
          </p>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
            ARTICLE IN PROGRESS
          </h1>
          <p className="text-base text-muted-foreground font-normal mb-10">
            This article hasn't been published yet. Check back soon.
          </p>
          <Button onClick={() => navigate('/blog')} variant="outline" className="tracking-widest text-xs">
            BACK TO BLOG
          </Button>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
