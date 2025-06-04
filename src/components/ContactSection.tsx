
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // This would be replaced with actual form submission logic
    console.log('Form submitted:', data);
    
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Responderemos em breve.",
      duration: 5000,
    });
    
    reset();
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      content: "+55 (14) 99999-9999",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "thiago.xavier@tj.gov.br",
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
            Para solicitar perícias, agendar consultorias ou tirar dúvidas sobre serviços forenses, preencha o formulário abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
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

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Horário de Atendimento</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Segunda - Sexta: 8:00 - 18:00</p>
              <p className="text-gray-500 dark:text-gray-400">Perícias mediante agendamento prévio</p>
            </div>
          </div>

          <div className="lg:col-span-3 animate-scale-in">
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-perito-dark/50 rounded-lg shadow-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    {...register("name", { required: "Nome é obrigatório" })}
                    placeholder="Seu nome"
                    className={`w-full ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email é obrigatório", 
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido"
                      }
                    })}
                    placeholder="seu.email@exemplo.com"
                    className={`w-full ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="mb-6 space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Assunto
                </label>
                <Input
                  id="subject"
                  {...register("subject", { required: "Assunto é obrigatório" })}
                  placeholder="Como posso ajudar?"
                  className={`w-full ${errors.subject ? "border-red-500" : ""}`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>
              <div className="mb-6 space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  {...register("message", { required: "Mensagem é obrigatória" })}
                  placeholder="Descreva sua necessidade em detalhes..."
                  className={`w-full min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full bg-perito-primary hover:bg-perito-primary/90 text-white"
              >
                Enviar mensagem <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
