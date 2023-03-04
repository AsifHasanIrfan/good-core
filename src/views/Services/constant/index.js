// Why Choose us Service Box images
import quality from '../../../assets/images/services/quality.webp';
import time from "../../../assets/images/services/timely.webp";
import cost from "../../../assets/images/services/cost.webp";
import refer from "../../../assets/images/services/refer.webp";

// Tech List images
import php from "../../../assets/images/services/php-blue.webp";
import dotNet from "../../../assets/images/services/microsoft-dot-net-logo.webp";
import nodeJs from "../../../assets/images/services/nodejs.webp";
import react from "../../../assets/images/services/react-native-logo.webp";
import angular from "../../../assets/images/services/angular-logo.webp";
import vueJs from "../../../assets/images/services/Vue.js.webp";
import ruby from "../../../assets/images/services/ruby-logo.webp";
import python from "../../../assets/images/services/python-logo.webp";
import java from "../../../assets/images/services/java-logo.webp";
import js from "../../../assets/images/services/JS-logo.webp";
import objC from "../../../assets/images/services/objective-c-logo.webp";
import swift from "../../../assets/images/services/swift-logo.webp";

// Awards and Recognition images
import clutch from "../../../assets/images/services/b2b-Compaines-2022.webp";
import forbes from "../../../assets/images/services/FTC-Badge-Circle-Blue-2022.webp";
import layer from "../../../assets/images/services/Layer-585.webp";
import topDevelopers from "../../../assets/images/services/topdevelopers-2021-1.webp";
import goodFirms from "../../../assets/images/services/goodfirms.webp";
import manifest from "../../../assets/images/services/manifest.webp";
import FAQOneAns from '../components/ServicesFAQ/FAQOneAns';
import ClientReviewHeading from '../components/OurAchievement/components/ClientReview/ClientReviewHeading';

export const whyChooseServiceBoxData = [
  {
    percent: "100%",
    title: "Quality of Service",
    icon: quality
  },
  {
    percent: "97%",
    title: "Timely Delivery",
    icon: time,
  },
  {
    percent: "100%",
    title: "Cost-effectiveness",
    icon: cost,
  },
  {
    percent: "99.6%",
    title: "Willingness to Refer",
    icon: refer,
  },
];

// Services tech list data
export const techListData = [
  {
    icon: php,
    title: "PHP",
    isLink: true,
    link: "",
  },
  {
    icon: dotNet,
    title: ".NET",
    isLink: true,
    link: "",
  },
  {
    icon: nodeJs,
    title: "Node.js",
    isLink: true,
    link: "",
  },
  {
    icon: react,
    title: "React",
    isLink: true,
    link: "",
  },
  {
    icon: angular,
    title: "Angular",
    isLink: true,
    link: "",
  },
  {
    icon: vueJs,
    title: "vue.js",
    isLink: true,
    link: "",
  },
  {
    icon: ruby,
    title: "Ruby",
    isLink: false,
  },
  {
    icon: python,
    title: "Python",
    isLink: false,
  },
  {
    icon: java,
    title: "Java",
    isLink: true,
    link: "",
  },
  {
    icon: js,
    isLink: false,
    title: "JS",
  },
  {
    icon: objC,
    isLink: false,
    title: "Obj-C",
  },
  {
    icon: swift,
    title: "Swift",
    isLink: false,
  },
];

// services awards and recognition data
export const servicesAwardsData = [
  {
    image: clutch,
    height: 133,
    width: 123,
    content: "Top Software Development Company, UK (2022) - Clutch",
  },
  {
    image: forbes,
    height: 133,
    width: 133,
    content: "Forbes Technology Council - Official Member (2022)",
  },
  {
    image: layer,
    height: 119,
    width: 140,
    content: "Crown Commercial Service Supplier Award, UK",
  },
  {
    image: topDevelopers,
    height: 131,
    width: 133,
    content: "Top Mobile App Developers, UK (2021) - TopDevelopers",
  },
  {
    image: goodFirms,
    height: 120,
    width: 140,
    content: "Top Software Development Company, London - GoodFirms",
  },
  {
    image: manifest,
    height: 131,
    width: 132,
    content: "Top Software Development Company, London - Manifest",
  },
];

// Our Achievements
export const ourAchievementsData = [
  {
    value: "16+",
    heading: "Years on <br /> the Market",
  },
  {
    value: "110+",
    heading: "Successful Project <br /> Deliveries",
  },
  {
    value: "90%",
    heading: "Repeat <br /> Customers",
  },
  {
    value: <ClientReviewHeading />,
    heading: "Client Reviews on <br /> Clutch",
  },
];

// services what we do data
export const whatWeDoData = [
  {
    icon: "",
    heading: "Requirement <br /> Analysis",
    content:
      "We start by talking to our clients to understand what they need, sketching out the software they want, and identifying any gaps or potential problems along the way.",
  },
  {
    icon: "",
    heading: "UI/UX <br /> Design",
    content:
      "Our in-house creative UI/UX team designs an intuitive interface for your software applications keeping the end-users in mind.",
  },
  {
    icon: "",
    heading: "Software <br /> Development/Coding",
    content:
      "We take your idea through our streamlined process of software development. Tailoring the product to your exact technical and design specifications.",
  },
];

// Front-end technologies
export const frontEndTech = [
  {
    title: "React",
    isLink: true,
    link: ""
  },
  {
    title: "Angular",
    isLink: true,
    link: ""
  },
  {
    title: "Vue.js",
    isLink: true,
    link: ""
  },
  {
    title: "Javascript",
    isLink: false
  },
  {
    title: "jQuery",
    isLink: false
  },
  {
    title: "HTML5",
    isLink: false
  },
  {
    title: "CSS/CSS3",
    isLink: false
  },
  {
    title: "LESS",
    isLink: false
  },
  {
    title: "Bootstrap/Bootstrap4",
    isLink: false
  },
];

// Front-end technologies
export const backEndTech = [
  {
    title: "PHP",
    isLink: true,
    link: ""
  },
  {
    title: "Javascript",
    isLink: false
  },
  {
    title: "C#",
    isLink: false
  },
  {
    title: "Java",
    isLink: true,
    link: ""
  },
  {
    title: "Python",
    isLink: false
  },
  {
    title: "GoLang",
    isLink: false
  }
];

// Frameworks / Libraries
export const frameworksLibraries = [
  {
    title: ".NET Core",
    isLink: false,
  },
  {
    title: ".NET Framework",
    isLink: true,
    link: "",
  },
  {
    title: "Node.js",
    isLink: true,
    link: "",
  },
  {
    title: "Flask",
    isLink: false,
  },
  {
    title: "ExpressJS",
    isLink: false,
  },
  {
    title: "Typescript",
    isLink: false,
  },
  {
    title: "Yii/Yii2",
    isLink: false,
  },
  {
    title: "Symfony",
    isLink: false,
  },
  {
    title: "Blazor",
    isLink: false,
  },
  {
    title: "Laravel",
    isLink: false,
  },
  {
    title: "Django",
    isLink: false,
  },
  {
    title: "Spring/Spring boot",
    isLink: false,
  },
];

// Database technologies
export const DatabaseTech = [
  {
    title: "Microsoft SQL Server",
    isLink: false,
  },
  {
    title: "MySQL",
    isLink: false,
  },
  {
    title: "PostgreSQL",
    isLink: false,
  },
  {
    title: "MongoDB",
    isLink: false,
  }
];

// COST OF CUSTOM SOFTWARE DEVELOPMENT SERVICES
export const customDevelopment = [
  {
    icon: "",
    title: "Technical Complexity",
    content:
      "Complex design specifications and advanced feature requirements make the software development process complex, time-consuming, and costly.",
  },
  {
    icon: "",
    title: "Third-Party Integrations",
    content:
      "Integration with third-party software systems such as payment gateways, maps, ERPs, or CRMs also impacts the cost of software development.",
  },
  {
    icon: "",
    title: "Features & Functionalities",
    content:
      "The number of features you want is the biggest cost driver. Screens, buttons, fields involved, and the amount of logic required can change costs drastically.",
  },
  {
    icon: "",
    title: "Custom Design",
    content:
      "Custom user interfaces are rather complex to design and implement accurately. Therefore, they often cause the cost of software development to increase.",
  },
];

// TYPES OF ENGAGEMENT OPTIONS WE OFFER
export const engagementOptions = [
  {
    title: "Fixed-Price Fixed-Scope",
    options: [
      "Fixed-Price Fixed-Scope software development service model is suitable when your software requirements are well-defined and not likely to change during the development process.",
      "We work with you upfront to define your software specifications in detail.",
      "We then guarantee delivery of the defined set of functionality in a specific time frame and cost.",
      "This one is not suitable for projects where software requirements are likely to change or evolve. ",
    ],
  },
  {
    title: "Time and Materials",
    options: [
      "Time and Materials model works best when the amount of development work envisioned is small but not well-defined.",
      "This software development service model keeps you from overspending on each phase by allowing you to review and decide on the budget for the next phase only if you are happy with the results of the previous one.",
      "The engagement is split into smaller fixed-cost/fixed-time phases (e.g. one month long).",
      "This one is not suitable for ongoing development requirements and turnarounds are naturally not as fast as those possible with dedicated teams.",
    ],
  },
  {
    title: "Dedicated Team",
    options: [
      "This development model works well when you envision a series of software projects but don’t wish to hire permanent employees, or if you are finding it difficult to find the right skill set in a timely manner.",
      "This one provides flexibility to change course and re-prioritize your projects and tasks as you go along. It allows you full control over how you would like to make the best use of your team’s time and skill set.",
      "You work directly with your team members at GoodCore and assign tasks. GoodCore’s Agile scrum master assists with the process.",
      "This software development service model offers discounted rates compared to the Fixed Cost/Fixed Scope engagement models.",
    ],
  },
];

// Services FAQ
export const servicesFAQs = [
  [
    {
      question:
        "What does GoodCore offer besides bespoke software development services?",
      answer: <FAQOneAns />,
    },
    {
      question:
        "Why should I hire a software development services company for my business?",
      answer:
        "There is a plethora of off-the-shelf software available for different business requirements, and if you have fairly straightforward requirements, then using off-the-shelf software might be best for you. But if you have complex requirements that standard off-the-shelf solutions can't handle or if you want to save yourself from the ongoing license fees for off-the-shelf software, bespoke software development would be a better option for you. ",
    },
    {
      question: "What are your software development costs?",
      answer:
        "The costs of software development services vary from project to project based on various factors, such as the scope, requirements, and technical complexity. We will determine the cost of your project after a thorough discussion with you to understand your requirements and assess the scope of your project. <br /> The final cost of software development comprises four major components: Development, Project Management, Quality Assurance, and UI/UX Design. ",
    },
  ],
  [
    {
      question: "What are your software development costs?",
      answer:
        "The costs of software development services vary from project to project based on various factors, such as the scope, requirements, and technical complexity. We will determine the cost of your project after a thorough discussion with you to understand your requirements and assess the scope of your project. <br /> The final cost of software development comprises four major components: Development, Project Management, Quality Assurance, and UI/UX Design. ",
    },
  ],
];