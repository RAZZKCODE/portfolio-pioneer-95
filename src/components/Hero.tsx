
import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center section-padding text-center relative pt-16">
      <div className="animate-fade-up [animation-delay:200ms] opacity-0">
        <h2 className="text-sm uppercase tracking-widest mb-6">Welcome</h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Creative Developer
        </h1>
        <p className="max-w-lg mx-auto text-muted-foreground mb-8">
          Crafting digital experiences with precision and passion. Specialized in creating beautiful, functional websites that leave a lasting impression.
        </p>
        <Button
          onClick={scrollToProjects}
          className="group"
          variant="outline"
          size="lg"
        >
          View My Work
          <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  );
}
