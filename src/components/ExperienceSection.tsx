
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, BookOpen, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Coordenador de Projetos",
      company: "Administração Central do Centro Paula Souza",
      duration: "Atual",
      description: "Atualmente sou Coordenador de Projetos na Administração Central do Centro Paula Souza, atuando na Área de Desenvolvimento e Planejamento, na equipe de Convênios de Etecs e Fatecs.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Coordenador de Projetos Robótica",
      company: "Polo de Robótica Paula Souza - Marília/SP",
      duration: "2020 - Atual",
      description: "Coordeno projetos no Polo de Robótica Paula Souza, desenvolvendo iniciativas educacionais e tecnológicas.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Coordenador de Curso",
      company: "ETECs",
      duration: "2015 - 2020",
      description: "Atuei como Coordenador de Cursos Técnicos nas Etecs durante 5 anos, gerenciando currículos e equipes pedagógicas.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Perito em Computação Forense",
      company: "Tribunal de Justiça de São Paulo",
      duration: "Atual",
      description: "Realizo perícias técnicas em computação forense, auxiliando processos judiciais com análises especializadas.",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-perito-dark/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 border-perito-primary text-perito-primary">
            Minha trajetória
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Experiência Profissional</h2>
          <div className="w-20 h-1 bg-perito-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-perito-primary/10 p-3 rounded-full mr-4 text-perito-primary dark:text-perito-secondary">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{exp.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company}</p>
                  </div>
                </div>
                <Badge className="self-start mb-4 bg-perito-secondary/20 text-perito-secondary border-perito-secondary/30">
                  {exp.duration}
                </Badge>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
