import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "3JS Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    
    title: "Wordpress Developer",
    company_name: "Conversion Pro LLP",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2025 - May 2025",
    points: [
      "Developed an eCommerce site (languageshoes.com) using WordPress, Elementor, AJAX, HTML, and CSS.",
      "Worked closely with Figma designers to bring high-fidelity UI into functional web page. ",
      "Improved site speed and performance, resulting in faster loading and better UX.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "Webs Jyoti",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Jan 2025",
    points: [
      "Explored ChatGPT API integration and experimented with basic AI customization workflows. ",
      "Assisted in building and styling a functional login page using PHP and HTML/CSS.  ",
      "Gained exposure to backend logic and user authentication systems.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    
    title: "Website Developer",
    company_name: "DIGI MARK INDIA",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 4, 2024 - July 30, 2024",
    points: [
      "Contributed to building and styling pages for digimarkindia.com alongside their in-house team",
      "Used HTML, CSS, and JavaScript to improve UI responsiveness and mobile compatibility.",
      "Improved UI consistency across devices by optimizing custom CSS layouts.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The website looks clean and works well on all screen sizes. Communication was smooth throughout the project.",
    name: "X",
    designation: "CFO",
    company: "X",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Solid frontend work delivered on time. Helped us improve the UI and fix some responsiveness issues.",
    name: "Y",
    designation: "COO",
    company: "Y",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Got our WordPress site up and running without issues. Everything was well-organized and easy to manage.",
    name: "Z",
    designation: "CTO",
    company: "Z",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D ANIMATION",
    description:
      "Built an interactive 3D animation using Three.js with smooth transitions and effects.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "3JS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://krishnam02.github.io/3JS/",
  },
  {
    name: "LANGUAGE SHOES",
    description:
      " Build an E-Commerce website using word-press & Shoptimizer theme.",
    tags: [
      {
        name: "WORD-PRESS",
        color: "blue-text-gradient",
      },
      {
        name: "ELEMENTOR",
        color: "green-text-gradient",
      },
      {
        name: "AJAX",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://languageshoes.com/",
  },
  {
    name: "3D PORTFOLIO",
    description:
      "Build an 3D portfolio showcasing my projects and skills.",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWIND",
        color: "green-text-gradient",
      },
      {
        name: "3JS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://krishnam02.github.io/3D-PORTFOLIO/",
  },
];

export { services, technologies, experiences, testimonials, projects };
