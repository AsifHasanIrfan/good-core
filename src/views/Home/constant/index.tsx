import AnalysisIcon from "@/assets/icons/AnalysisIcon";
import DevApproachIcon from "@/assets/icons/DevApproachIcon";
import DevelopmentTeamIcon from "@/assets/icons/DevelopmentTeamIcon";
import MobileAppIcon from "@/assets/icons/MobileAppIcon";
import PrototypingIcon from "@/assets/icons/PrototypingIcon";
import RapidDevIcon from "@/assets/icons/RapidDevIcon";
import SpecificationsIcon from "@/assets/icons/SpecificationsIcon";
import SupportIcon from "@/assets/icons/SupportIcon";
import WebAppIcon from "@/assets/icons/WebAppIcon";

// services data
export const services = [
  {
    id: "services-1",
    link: "/web-app-development",
    icon: <WebAppIcon />,
    title: "Web Application Development",
    description:
      "Utilising the latest technologies, we build web applications that deliver remarkable functionality and user engagement from within a browser window.",
  },
  {
    id: "services-2",
    link: "/mobile-app-development",
    icon: <MobileAppIcon />,
    title: "Mobile App Development",
    description:
      "Stunning mobile apps that work across a variety of devices and engage large audiences – designed with security, scalability, and usability in mind.",
  },
  {
    id: "services-3",
    link: "/dedicated-development-team",
    icon: <DevelopmentTeamIcon />,
    title: "Dedicated Development Team",
    description:
      "Scale your delivery capacity with a wide range of technology skills - leverage GoodCore’s experience in hiring, motivating and managing top tech professionals.",
  },
];

// our clients data
export const ourClients = [
  {
    id: "our-client-1",
    title: "Mitsubishi Heavy Industries",
    src: "/assets/images/mitsubishi-logo-colored.webp",
    width: 46,
    height: 40,
  },
  {
    id: "our-client-2",
    title: "GC Business Finance",
    src: "/assets/images/business-finance-logo-colored.webp",
    width: 129,
    height: 40,
  },
  {
    id: "our-client-3",
    title: "London Women's Clinic",
    src: "/assets/images/lwc-icon.webp",
    width: 98,
    height: 57,
  },
  {
    id: "our-client-4",
    title: "University of Winchester",
    src: "/assets/images/University_of_Winchester-logo-colored.webp",
    width: 128,
    height: 56,
  },
  {
    id: "our-client-5",
    title: "GoPlayGolf",
    src: "/assets/images/gpg-logo-colored.webp",
    width: 152,
    height: 40,
  },
  {
    id: "our-client-6",
    title: "Harding Display",
    src: "/assets/images/harding-logo-colored.webp",
    width: 161,
    height: 38,
  },
  {
    id: "our-client-7",
    title: "HireVine",
    src: "/assets/images/hirevine-logo-colored.webp",
    width: 187,
    height: 38,
  },
];

// why us data
export const whyUs = [
  {
    firstTitle: "On-Time &",
    secondTitle: "Budget",
    description:
      "We have a time-tested agile process that will deliver your software project quickly and efficiently.",
  },
  {
    firstTitle: "Discovery",
    secondTitle: "Phase",
    description:
      "We offer a 3-6 week service that helps visualise your idea and creates a well-defined scope of work.",
  },
  {
    firstTitle: "MVP",
    secondTitle: "Development",
    description:
      "We build MVPs that reduce time-to-market and provide the basis for full-scale software products.",
  },
  {
    firstTitle: "Tailored for",
    secondTitle: "Your Business",
    description:
      "We are trusted by startups and small, medium and large enterprises alike.",
  },
  {
    firstTitle: "Dedicated",
    secondTitle: "support",
    description:
      "30-day warranty & 24/7 support with SLAs that keep your software running.",
  },
  {
    firstTitle: "IP",
    secondTitle: "Protection",
    description:
      "Intellectual Property for the software we develop for you will belong to you. Period.",
  },
];

// Business Objectives data
export const objectives = [
  {
    icon: "/assets/images/startup-icon.webp",
    height: 45,
    width: 45,
    title: "Startups",
    description:
      "We take your idea through prototyping to MVP development to full-scale launch of your product.",
    objectives: [
      "Agile development",
      "MVP creation and prototyping",
      "Fast time-to-market",
      "Advice on technology stack",
    ],
  },
  {
    icon: "/assets/images/sme.webp",
    height: 46,
    width: 46,
    title: "SMEs",
    description:
      "We work with you to define, visualise, and build software tailored to your business needs.",
    objectives: [
      "Business need analysis",
      "Early risk mitigation",
      "Flexibility and scalability",
      "Budgetary control",
    ],
  },
  {
    icon: "/assets/images/enterprise.webp",
    height: 47,
    width: 46,
    title: "Large Enterprises",
    description:
      "We have over a decade of experience ensuring success of large enterprises’ tech initiatives.",
    objectives: [
      "Modernisation of legacy software",
      "Interdepartmental workflows",
      "Regulatory compliance",
      "Dedicated support team",
    ],
  },
];

export const approaches = [
  {
    icon: <AnalysisIcon />,
    title: "Discussion and Analysis",
    description:
      "Together with our developers and analysts, we begin by discussing and analysing our client’s needs, sketching the outline of the desired software, identifying gaps and proposing solutions along the way.",
  },
  {
    icon: <PrototypingIcon />,
    title: "Design Prototyping",
    description:
      "We help our clients and their end-users visualise the look-and-feel and interaction of the finished product before it is actually built using state-of-the-art design and prototyping tools.",
  },
  {
    icon: <SpecificationsIcon />,
    title: "Software Specifications",
    description:
      "We write a software specifications document (software blueprint) that ensures that our clients get exactly what they expected and agreed to - in terms of functionality and the product’s UI and UX design.",
  },
  {
    icon: <DevApproachIcon />,
    title: "Development Approach",
    description:
      "We use agile development style alongside the traditional approaches to ensure reliability of delivery schedule and quality of the end product.",
  },
  {
    icon: <RapidDevIcon />,
    title: "Rapid Development",
    description:
      "Our developers make use of cutting-edge tools and development frameworks to ensure quality code construction in the shortest time possible.",
  },
  {
    icon: <SupportIcon />,
    title: "Launch and Support",
    description:
      "Our team is exceptionally skilled in planning the deployment and maintenance of large, complex, and high-visibility software systems and mobile apps.",
  },
];

// FAQ data
export const FAQData = [
  [
    {
      question:
        "How many software companies are there in the UK? How does GoodCore fit into the top ones?",
      answer:
        "There are over 94,064 software companies in the UK. We are renowned as one of the top-notch software development companies in the UK with over 18 years of experience, and diverse teams across the globe.",
    },
    {
      question: "Is software consultancy important?",
      answer:
        "Yes. Reputable software development agencies will always offer software consultancy via software solutions insights and suggestions based on their clients' unique goals.",
    },
  ],
  [
    {
      question:
        "How do I find the best custom software development agency in London?",
      answer:
        "Check portfolios, get referrals, and discuss your project thoroughly. With a 5-star Cluth rating, GoodCore is a custom software development agency that offers the best service, every time.",
    },
    {
      question:
        "Which famous IT Companies near me can provide me with app development services?",
      answer:
        "Located in London, with strategic off-shore centres around the globe we are one of the best IT companies near you, no matter where you are.",
    },
  ],
];
