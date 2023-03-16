import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";

const menuLinks = [
  { name: "Experience", route: "/work" },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  { name: "Github", route: "/github" },
  { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Michael Oroyo. All Rights Reserved.`,
  author: {
    name: "Michael Oroyo",
    accounts: [
      {
        url: "https://github.com/Michle99",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/m0ry/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      
      {
        url: "mailto:sammiyonyx@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/1YeK-7SAcENQ44eFw3ampk-mcGPma1tVZ/view?usp=sharing",
  icon: <CgAlbum />,
  name: "Resume",
};

const mobileTechStacks = [
  {
    name: "Android",
    icon: <FaAndroid fontSize="20px" />,
    url: "https://www.android.com/",
  },
  {
    name: "React Native",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },
  {
    name: "Kotlin",
    icon: <SiKotlin fontSize="20px" />,
    url: "https://kotlinlang.org/",
  },
  {
    name: "Java",
    icon: <FaJava fontSize="20px" />,
    url: "https://www.java.com/en/",
  },
];

const webTechStacks = [
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "Typescript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/",
  },
  {
    name: "Redux & Redux Saga",
    icon: <SiRedux fontSize="20px" />,
    url: "https://redux.js.org/",
  },
  {
    name: "SASS",
    icon: <FaSass fontSize="20px" />,
    url: "https://sass-lang.com/",
  },
];

const otherTechStacks = [
  {
    name: "CI/CD - CircleCI",
    icon: <SiFastlane fontSize="20px" />,
    url: "https://circleci.com",
  },
  {
    name: "Vercel",
    icon: <SiFirebase fontSize="20px" />,
    url: "https://vercel.com/",
  },
  {
    name: "Github & GitLab",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.gitlab.com/",
  },
];

const companies = [
  {
    title: "Tata Consultancy Services",
    alt: "Tata Consultancy Services",
    url: "https://www.tcs.com/",
    role: "Entry Level Software Engineer",
    skills: ["React", "Sass", "Redux", "Redux Saga", "StorybookJS"],
    period: "Sept 2021 -Jan 2023",
    logo: "/tcs.png",
  },
  
];

const educations = [
  {
    title: "Georgia State University",
    alt: "GSU image",
    url: "https://www.gsu.edu",
    role: "Bachelor's Degree in Computer Science",
    skills: [],
    period: "Jan 2018 - May 2021",
    logo: "/gsu.png",
  },
  {
    title: "Georgia State University Perimeter College",
    alt: "GSU image",
    url: "https://perimeter.gsu.edu/about-perimeter-college/clarkston/",
    role: "Associates Degree in Computer Science",
    skills: [],
    period: "Mar 2015 - Sept 2018",
    logo: "/gsu.png",
  },
];

const sideProjects = [
  {
    name: "NextJS E-commerce web application",
    imageUrl: "/headiesop.png",
    alt: "NextJS E-commerce web application",
    summary:
      "An E-commerce web application built with nextjs and with fully functional stripe payment.",
    link: "https://sanity-ecommerce-roan-seven.vercel.app",
    tech: [
      'NextJS',
      "Sanity",
      "Stripe"
    ]
  },
  {
    name: "A React Admin Dashboard web application",
    imageUrl: "/dashboard.png",
    alt: "A React Admin Dashboard web application",
    summary:
      "A React Admin Dashboard that presents data in a user-friendly and easy-to-use way.",
    link: "https://react-admin-dashboard-michle99.vercel.app",
    tech: [
      'React',
      "MaterialUI",
      "Nivo"
    ]
  },
  {
    name: "A Web3 NFT Minting web application",
    imageUrl: "/igboland.png",
    alt: "A Web3 NFT Minting web application",
    summary:
      "A Web3 NFT Minting web application built with Solidity and ReactJS deployed on Repl.it platform.",
    link: "https://igbolandingnft-frontend.shade5.repl.co/",
    tech: [
      'React',
      "Solidity",
      "Hardhat"
    ]
  },
  {
    name: "A ChatGPT web application",
    imageUrl: "/openai.png",
    alt: "A ChatGPT web client",
    summary:
      "A ChatGPT web client application interacting with openAI API built with HTML, CSS, and vanilla JS and deployed on vercel platform.",
    link: "https://openai-cleint.vercel.app",
    tech: [
      'HTML',
      "CSS",
      "Vanilla JS"
    ]
  },
];

export {
  menuLinks,
  webTechStacks,
  mobileTechStacks,
  otherTechStacks,
  siteConfig,
  resume,
  companies,
  educations,
  sideProjects,
};
