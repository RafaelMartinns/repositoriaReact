import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Sou um desenvolvedor em formação com paixão por criar soluções eficazes e escaláveis. Atualmente cursando Análise e Desenvolvimento de Sistemas, tenho experiência prática com tecnologias como Java, React.js, SQL e JavaScript. Em projetos acadêmicos e pessoais, foco  transformar problemas complexos em soluções simples e eficientes, e meu objetivo é atuar como estágiario em desenvolvimento de sistemas onde poderei aplicar minhas habilidades e aprender novas, impulsionando a inovação tecnológica.`;

export const ABOUT_TEXT = `Sempre gostei de desafios, e minha jornada na área de tecnologia reflete isso. Desde projetos acadêmicos até empreendimentos próprios, como a venda de doces, aprendi a resolver problemas de maneira criativa e focada em resultados. Acredito que o sucesso vem não só das habilidades técnicas, mas também da capacidade de trabalhar bem em equipe e lidar com as pessoas. Por isso, estou sempre buscando estudar novas tecnologias e, ao mesmo tempo, melhorar meu relacionamento humano, criando conexões significativas que impulsionam o aprendizado e o crescimento.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Bloco de Notas",
    image: project1,
    description:
      "Um site de bloco de notas desenvolvido em HTML, CSS e JavaScript. Este site permite que os usuários criem, editem e excluam notas de forma intuitiva e fácil.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link:"https://rafaelmartinns.github.io/BlocoDeNotas/",
  },
  {
    title: "Sistema de Gerenciamento de Jogadores de Futebol",
    image: project2,
    description:
      "Sistema onde os usuários podem cadastrar, listar e gerenciar informações sobre jogadores, como nome, time, número de gols e assistências.",
    technologies: ["HTML", "Pico CSS", "JavaScript"],
    link:"https://github.com/RafaelMartinns/Sistema-de-Gerenciamento-de-Jogadores-de-Futebol",
  },
  {
    title: "Sistema de Vendas de Calçados",
    image: project3,
    description:
      "Sistema que permite a gestão de produtos, clientes e vendas, com funcionalidades de CRUD e geração de relatórios por data.",
    technologies: ["Java", "Java Swing", "MySQL"],
    link:"https://github.com/RafaelMartinns/LojaDeCalcadosPDV",
  },
 
];

export const CONTACT = {
  address: "Rua Holda Botto Malanconi - Cep: 05853-310",
  phoneNo: "11 942215577 ",
  email: "rafael3737@hotmail.com",
};
