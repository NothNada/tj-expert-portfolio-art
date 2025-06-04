
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Briefcase, GraduationCap, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const CurriculumSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experienceData = [
    {
      position: "Perito em Computação Forense",
      company: "Tribunal de Justiça de São Paulo",
      period: "2019 - Atual",
      description: "Realização de perícias técnicas em computação forense, análises de evidências digitais e elaboração de laudos para processos judiciais.",
    },
    {
      position: "Coordenador de Projetos",
      company: "Administração Central do Centro Paula Souza",
      period: "2020 - Atual",
      description: "Gestão de projetos na Área de Desenvolvimento e Planejamento, responsável por convênios de Etecs e Fatecs.",
    },
    {
      position: "Professor",
      company: "Fatec Santos",
      period: "2018 - Atual",
      description: "Docente em cursos de tecnologia, ministrando disciplinas relacionadas à segurança da informação e análise forense.",
    },
    {
      position: "Coordenador de Cursos Técnicos",
      company: "ETECs",
      period: "2015 - 2020",
      description: "Coordenação de cursos técnicos nas áreas de informática e tecnologia, gestão de equipes e desenvolvimento de currículos.",
    },
  ];

  const educationData = [
    {
      degree: "Mestrado em Ciência da Computação",
      institution: "Universidade Estadual Paulista (UNESP)",
      period: "2016 - 2018",
      description: "Especialização em Segurança da Informação e Computação Forense.",
    },
    {
      degree: "Especialização em Computação Forense",
      institution: "Instituto de Criminalística",
      period: "2017 - 2019",
      description: "Formação específica para atuação como perito digital.",
    },
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade Estadual Paulista (UNESP)",
      period: "2012 - 2016",
      description: "Formação em fundamentos de computação, programação e sistemas de informação.",
    },
  ];

  const certificationsData = [
    {
      title: "Certified Computer Forensics Examiner (CCFE)",
      issuer: "International Association of Computer Investigative Specialists",
      year: "2019",
      description: "Certificação internacional em análise forense computacional.",
    },
    {
      title: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      year: "2018",
      description: "Certificação em segurança de sistemas de informação.",
    },
    {
      title: "Digital Forensics Certified Practitioner",
      issuer: "DFCB",
      year: "2017",
      description: "Certificação prática em perícia digital e análise forense.",
    },
  ];

  const skillsData = [
    {
      category: "Perícia Digital",
      skills: ["Análise Forense", "Recuperação de Dados", "Análise de Malware", "Investigação Digital", "Perícia em Dispositivos Móveis"],
    },
    {
      category: "Segurança da Informação",
      skills: ["Resposta a Incidentes", "Análise de Vulnerabilidades", "Criptografia", "Segurança de Redes", "Políticas de Segurança"],
    },
    {
      category: "Ferramentas e Tecnologias",
      skills: ["EnCase", "FTK", "Autopsy", "Cellebrite", "Wireshark", "Python para Forense", "Linux Forense"],
    },
    {
      category: "Competências Adicionais",
      skills: ["Elaboração de Laudos Periciais", "Testemunho Técnico", "Gestão de Projetos", "Docência", "Pesquisa Científica"],
    },
  ];

  return (
    <section id="curriculum" className="py-20 bg-white dark:bg-perito-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 border-perito-primary text-perito-primary">
            Currículo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Qualificações Profissionais
          </h2>
          <div className="w-20 h-1 bg-perito-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Minha formação acadêmica e experiência profissional me qualificam para atuar com excelência em perícia forense computacional.
          </p>

          <Button variant="outline" className="mt-6 border-perito-primary text-perito-primary hover:bg-perito-primary hover:text-white">
            <Download className="mr-2 h-4 w-4" /> Baixar CV Completo
          </Button>
        </div>

        <Tabs defaultValue="experience" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="experience" className="flex items-center justify-center">
              <Briefcase className="mr-2 h-4 w-4" /> Experiência
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center justify-center">
              <GraduationCap className="mr-2 h-4 w-4" /> Formação
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center justify-center">
              <Award className="mr-2 h-4 w-4" /> Certificações
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center justify-center">
              <BookOpen className="mr-2 h-4 w-4" /> Habilidades
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="animate-fade-in">
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{item.position}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                      </div>
                      <Badge className="self-start md:self-center mt-2 md:mt-0 bg-perito-secondary/20 text-perito-secondary border-perito-secondary/30">
                        {item.period}
                      </Badge>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="animate-fade-in">
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{item.degree}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                      </div>
                      <Badge className="self-start md:self-center mt-2 md:mt-0 bg-perito-primary/20 text-perito-primary border-perito-primary/30">
                        {item.period}
                      </Badge>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="animate-fade-in">
            <div className="space-y-6">
              {certificationsData.map((item, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.issuer}</p>
                      </div>
                      <Badge className="self-start md:self-center mt-2 md:mt-0 bg-perito-accent/20 text-perito-accent border-perito-accent/30">
                        {item.year}
                      </Badge>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.map((category, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-md h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-perito-secondary mr-2"></div>
                          <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CurriculumSection;
