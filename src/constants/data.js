import { images } from "../constants";

const skillColor = "white";

const skills = [
  {
    name: "HTML",
    icon: `${images.html}`,
    bgColor: skillColor,
  },
  {
    name: "CSS",
    icon: `${images.css}`,
    bgColor: skillColor,
  },
  {
    name: "JavaScript",
    icon: `${images.javascript}`,
    bgColor: skillColor,
  },
  {
    name: "React JS",
    icon: `${images.react}`,
    bgColor: skillColor,
  },
  {
    name: "Node JS",
    icon: `${images.node}`,
    bgColor: skillColor,
  },
  {
    name: "Mongo DB",
    icon: `${images.mongodb}`,
    bgColor: skillColor,
  },
  {
    name: "Express JS",
    icon: `${images.express}`,
    bgColor: skillColor,
  },
  {
    name: "Redux",
    icon: `${images.redux}`,
    bgColor: skillColor,
  },
  {
    name: "Git",
    icon: `${images.git}`,
    bgColor: skillColor,
  },
  {
    name: "TypeScript",
    icon: `${images.typescript}`,
    bgColor: skillColor,
  },
  {
    name: "Sass",
    icon: `${images.sass}`,
    bgColor: skillColor,
  },
  {
    name: "API",
    icon: `${images.api}`,
    bgColor: skillColor,
  },
];

const experiences = [
  {
    year: ["2022 - 2023"],
    works: [
      {
        name: "Executive Tutor",
        company: "Focus Edumatics Pvt Ltd (Remote)",
        desc: "Math tutor for K3 to K12 Students",
      },
    ],
  },
  {
    year: ["2019 - 2021"],
    works: [
      {
        name: "Master's in Physics",
        company: "National College, Trichy",
        desc: "Graduated with Distinction",
      },
    ],
  },
  {
    year: ["2016 - 2019"],
    works: [
      {
        name: "Bachelor's in Physics",
        company: "National College, Trichy",
        desc: " Graduated with First-class",
      },
    ],
  },
];

const work = [
  {
    title: "Mailey",
    description:
      "Mailey is designed to streamline the process of sending bulk emails to a large number of recipients with ease and efficiency",
    imgUrl: images.about01,
    tag: ["MERN"],
    codeLink: "https://github.com/praveenrajh/Bulk_Email_Tool",
    link: "https://bulkey.netlify.app/",
  },
  {
    title: "Let’s Cook",
    description:
      "Let's Cook is a dynamic and interactive Recipe Book application, in this we can seamlessly create, edit, and view their recipe",
    imgUrl: images.about02,
    tag: ["MERN"],
    codeLink: "https://github.com/praveenrajh/letscook-frontend",
    link: "https://letcook.netlify.app/",
  },
  {
    title: "Rentley",
    description:
      "Rentley is designed to facilitate the seamless process of effortlessly renting hotel rooms and managing bookings with unparalleled efficiency",
    imgUrl: images.about03,
    tag: ["MERN"],
    codeLink: "https://github.com/praveenrajh/Rentley",
    link: "https://rentley.netlify.app/",
  },
];

const data = { skills, experiences, work };

export default data;
