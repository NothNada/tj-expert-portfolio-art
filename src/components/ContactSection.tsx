import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      content: "+55 (14) 99818-1282",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "perito.thiagox@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-perito-dark/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 border-perito-primary text-perito-primary">
            Contato
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Entre em contato
          </h2>
          <div className="w-20 h-1 bg-perito-secondary mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Para solicitar perícias, agendar consultorias ou tirar dúvidas sobre serviços forenses, chame nos contatos abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-perito-primary/10 p-3 rounded-full text-perito-primary dark:text-perito-secondary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                </div>
              </div>
            ))}

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
