import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center px-6">
          <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
            Error 404
          </p>
          <h1 className="text-[80px] md:text-[120px] font-medium tracking-tight leading-none mb-6">
            404
          </h1>
          <p className="text-base text-muted-foreground font-normal mb-12 max-w-sm mx-auto">
            This page doesn't exist. It may have been moved or the URL is incorrect.
          </p>
          <Button
            onClick={() => navigate('/')}
            className="tracking-widest text-xs px-10"
          >
            RETURN HOME
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
