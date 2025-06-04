
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen hexagon-pattern relative flex items-center overflow-hidden bg-gray-100 dark:bg-perito-dark">
      <div className="absolute inset-0 bg-gradient-to-r from-perito-primary/80 to-perito-accent/40 dark:from-perito-dark/90 dark:to-perito-primary/60" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-serif">
              Thiago Xavier
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-100 mb-8">
              Perito em Computação Forense no Tribunal de Justiça
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              Especialista em análise e perícia digital, com mais de 10 anos 
              de experiência em investigação e análise forense computacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-perito-secondary text-white hover:bg-perito-secondary/90">
                Conheça meu trabalho <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-perito-primary">
                Entre em contato
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/4630f558-2294-4bb5-9ae5-eca324d5da77.png" 
                alt="Thiago Xavier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24 lg:h-32"
          fill="currentColor"
          style={{ color: '#f8f9fa', display: 'block' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,31,17.35,96.39,38.39S255.7,72,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
