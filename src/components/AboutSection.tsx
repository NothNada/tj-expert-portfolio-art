
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const skills = [
    "Perícia Digital",
    "Análise Forense",
    "Segurança da Informação",
    "Recuperação de Dados",
    "Informática Forense",
    "Investigação Digital",
    "Educação",
    "Gestão de Projetos",
    "Coordenação",
    "Tecnologia",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-perito-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 border-perito-primary text-perito-primary">
            Sobre mim
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Olá, meu nome é Thiago</h2>
          <div className="w-20 h-1 bg-perito-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/4630f558-2294-4bb5-9ae5-eca324d5da77.png" 
                  alt="Thiago Xavier" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
          <div className="animate-fade-in-right">
            <p className="text-lg mb-6 leading-relaxed">
              Iniciei minha carreira como professor aos 16 anos em escolas particulares 
              de informática. Atuei na rede Pública como professor de Matemática em 
              diversas instituições de Marília, incluindo o Gabriel Monteiro, Oracina, 
              Baltazar, Bicudo e, principalmente, na Etec Antonio Devisate.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Hoje trabalho na Administração Central do Centro Paula Souza em São Paulo, 
              cuidando das Expansões das Etecs e Fatecs para todo o estado de São Paulo. 
              Na prática, ajudo na abertura de novas Etecs e Fatecs e promovo o fortalecimento 
              das que já existem.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Sou também professor na Fatec de Santos, Professor/Tutor no Univem, bem como 
              Perito em Computação Forense no Tribunal de Justiça de São Paulo.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  className="bg-perito-primary/10 text-perito-primary dark:bg-perito-primary/20 dark:text-perito-secondary hover:bg-perito-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
