
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const CommitmentSection = () => {
  const commitments = [
    {
      title: "Coordenador Projetos ADM Central",
      description: "Atualmente sou Coordenador de Projetos na Administração Central do Centro Paula Souza, atuando na Área de Desenvolvimento e Planejamento, na equipe de Convênios de Etecs e Fatecs",
    },
    {
      title: "Participação",
      description: "Atualização de matrizes curriculares.",
    },
    {
      title: "Trilhas Profissionais",
      description: "Parceria com a Itaú Educação e Trabalho, BID - Banco Internacional de Desenvolvimento e a Brasscom",
    },
    {
      title: "Projeto AMS",
      description: "Articulação Médio Superior - Parceria com a IBM e Volkswagem",
    },
  ];

  const principles = [
    "Garantir seu futuro na Etec",
    "Realizar seu sonho profissional",
    "Fazer a diferença por onde passar",
    "Ser o melhor",
  ];

  return (
    <section id="commitment" className="py-20 bg-white dark:bg-perito-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 border-perito-primary text-perito-primary">
            Compromisso
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Meu compromisso com o trabalho
          </h2>
          <div className="w-20 h-1 bg-perito-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <div className="prose max-w-none dark:prose-invert">
              <h3 className="text-2xl font-bold mb-4">Foco Principal</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Pretendo motivar e envolver os professores, alunos, pais, direção, equipe pedagógica, administrativo e demais funcionários. Estar aberto às novas ideias, possibilidades e perspectivas; Estar sempre disposto a novas práticas quando necessário; Trabalhar com criatividade e inovação; Presar sempre pela honestidade e transparência.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Todos os alunos, familiares ou responsáveis terão importância e serão muito bem compreendidos conforme as suas necessidades e sugestões; Vou agir de forma humanizada em busca de uma Gestão de Excelência.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 font-medium italic">
                * Maior apoio às atividades Esportivas e Culturais
              </p>
            </div>

            <div className="prose max-w-none dark:prose-invert">
              <h3 className="text-2xl font-bold mb-4">Forma de Gestão</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Realizar projetos entre alunos e professores voltado à comunidade. Diálogo com as indústrias, empresas e comércio regional com objetivo de gerar estágios, parcerias e oportunidades aos nossos alunos.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commitments.map((item, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-6 relative">
                <h3 className="font-serif text-xl font-bold mb-6 text-center">
                  Comigo Você Pode
                </h3>
                <ul className="space-y-3">
                  {principles.map((principle, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-200">
                      <Check className="mr-2 h-5 w-5 text-perito-secondary flex-shrink-0" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
