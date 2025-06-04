
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-perito-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-4">Thiago Xavier</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Perito em Computação Forense no Tribunal de Justiça de São Paulo, atuando com excelência na análise técnica digital para processos judiciais.
            </p>
            <Button 
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-perito-primary transition-all duration-300"
              onClick={scrollToTop}
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Voltar ao topo
            </Button>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">Sobre</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experiência</a>
              </li>
              <li>
                <a href="#commitment" className="text-gray-300 hover:text-white transition-colors duration-300">Compromisso</a>
              </li>
              <li>
                <a href="#curriculum" className="text-gray-300 hover:text-white transition-colors duration-300">Currículo</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:thiago.xavier@tj.gov.br" className="hover:text-white transition-colors duration-300">
                  thiago.xavier@tj.gov.br
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Telefone:</span>
                <a href="tel:+5514999999999" className="hover:text-white transition-colors duration-300">
                  +55 (14) 99999-9999
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Localização:</span>
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} Thiago Xavier. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
