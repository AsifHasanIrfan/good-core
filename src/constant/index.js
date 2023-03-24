import hiringProfile from "../../public/assets/images/hiring-profile.webp";
import questionMark from "../../public/assets/images/question-mark.webp";

// global location image
import karachiOffice from "../../public/assets/images/karachi-office.webp";
import malaysiaPlace from "../../public/assets/images/malaysia-place.webp";
import ukPlace from "../../public/assets/images/uk-place.webp";

export const mainNavLinks = [
  {
    id: 1,
    title: "Services",
    link: "/services",
    isSubMenu: true,
  },
  {
    id: 2,
    title: "Technologies",
    link: "/technologies",
    isSubMenu: true,
  },
  {
    id: 3,
    title: "Company",
    link: "/company",
    isSubMenu: true,
  },
  {
    id: 4,
    title: "Industries",
    link: "/industries",
    isSubMenu: true,
  },
  {
    id: 5,
    title: "Case Studies",
    link: "/case-studies",
    isSubMenu: false,
  },
  {
    id: 6,
    title: "Blog",
    link: "/blog",
    isSubMenu: false,
  },
];

// services sub menu simple menu data
export const servicesSimpleMenu = [
  {
    name: "Software Project Rescue",
    href: "",
  },
  {
    name: "Support & Maintenance",
    href: "",
  },
  {
    name: "API Development & System Integration",
    href: "",
  },
  {
    name: "QA & Testing Services",
    href: "",
  },
  {
    name: "UI/UX Design",
    href: "",
  },
];

// services sub menu data
export const navLinks = {
  services: {
    name: "Services",
    link: "/services",
    isSubMenu: true,
    subMenu: [
      [
        {
          name: "Web App Development",
          desc: "Cost-efficient business apps and web portals custom-built for a variety of industries",
          href: "",
          links: [],
        },
        {
          name: "BESPOKE BUSINESS APPLICATIONS",
          desc: "Custom web and mobile-based software solutions for efficient business processes",
          href: "",
          links: [],
        },
        {
          name: "WEB PORTAL DEVELOPMENT",
          desc: "",
          href: "",
          links: [
            {
              name: "B2B PORTAL DEVELOPMENT",
              href: "",
            },
            {
              name: "VENDOR PORTAL DEVELOPMENT",
              href: "",
            },
            {
              name: "CUSTOMER PORTAL DEVELOPMENT",
              href: "",
            },
          ],
        },
        {
          name: "DESKTOP APP DEVELOPMENT",
          desc: "",
          href: "",
          links: [
            {
              name: "WINDOWS DEVELOPMENT",
              href: "",
            },
            {
              name: "macOS DEVELOPMENT",
              href: "",
            },
          ],
        },
      ],
      [
        {
          name: "MOBILE APP DEVELOPMENT",
          desc: "Custom-built user-friendly Android, iOS, and cross-platform mobile apps",
          href: "",
          links: [],
        },
        {
          name: "SOFTWARE DEVELOPMENT OUTSOURCING",
          desc: "",
          href: "",
          links: [
            {
              name: "DEDICATED DEVELOPMENT TEAM",
              href: "",
            },
            {
              name: "IT STAFF AUGMENTATION",
              href: "",
            },
          ],
        },
        {
          name: "FOR STARTUPS",
          desc: "",
          href: "",
          links: [
            {
              name: "MVP DEVELOPMENT",
              href: "",
            },
            {
              name: "DISCOVERY WORKSHOPS",
              href: "",
            },
            {
              name: "VIRTUAL CTO",
              href: "",
            },
          ],
        },
        {
          name: "PRODUCT DEVELOPMENT",
          desc: "",
          href: "",
          links: [
            {
              name: "SaaS APPLICATION DEVELOPMENT",
              href: "",
            },
            {
              name: "WHITE LABEL SOFTWARE DEVELOPMENT",
              href: "",
            },
          ],
        },
      ],
    ],
  },
  technologies: {
    name: "Technologies",
    link: "/technologies",
    isSubMenu: true,
    subMenu: [
      [
        {
          name: "Web Development",
          desc: "",
          href: "",
          links: [
            {
              name: "Node.js",
              href: "",
            },
            {
              name: "PHP",
              href: "",
            },
            {
              name: ".NET",
              href: "",
            },
            {
              name: "JAVA",
              href: "",
            },
          ],
        },
      ],
      [
        {
          name: "FrontEnd Development",
          desc: "",
          href: "",
          links: [
            {
              name: "React",
              href: "",
            },
            {
              name: "Vue.js",
              href: "",
            },
            {
              name: "Angular",
              href: "",
            },
          ],
        },
      ],
      [
        {
          name: "MOBILE APP DEVELOPMENT",
          desc: "",
          href: "",
          links: [
            {
              name: "iOS",
              href: "",
            },
            {
              name: "ANDROID",
              href: "",
            },
            {
              name: "CROSS-PLATFORM",
              href: "",
            },
          ],
        },
      ],
      [
        {
          name: "CLOUD DEVELOPMENT",
          desc: "",
          href: "",
          links: [
            {
              name: "MICROSOFT AZURE",
              href: "",
            },
            {
              name: "GOOGLE CLOUD PLATFORM",
              href: "",
            },
          ],
        },
      ],
    ],
  },
  company: {
    name: "Company",
    link: "/company",
    isSubMenu: true,
    subMenu: [
      [
        {
          name: "ABOUT US",
          desc: "The hardworking team behind GoodCore – achieving excellence since 2005",
          href: "/company",
          links: [],
        },
        {
          name: "TECHNOLOGIES",
          desc: "Tools and technologies selected depending on the specifics of each project",
          href: "/technologies",
          links: [],
        },
      ],
      [
        {
          name: "HOW WE WORK",
          desc: "Four flexible engagement models: You choose one that will work best for you!",
          href: "/company/how-we-work",
          links: [],
        },
        {
          name: "PRICING",
          desc: "All the various factors you need to consider when sizing up development costs",
          href: "/company/pricing",
          links: [],
        },
      ],
      [
        {
          name: "OUR PROCESS",
          desc: "Our time-tested process of developing efficient and fully custom software systems",
          href: "",
          links: [],
        },
        {
          name: "FAQS",
          desc: "Answering some of the most common questions that you may have in mind",
          href: "/company/faqs",
          links: [],
        },
      ],
    ],
  },
  industries: {
    name: "Industries",
    link: "/industries",
    isSubMenu: true,
    subMenu: [
      [
        {
          name: "TECH",
          desc: "Software tailored to your requirements to solve your technology challenges",
          href: "",
          links: [],
        },
        {
          name: "HEALTHCARE",
          desc: "Custom-built solutions that redefine healthcare and patient management",
          href: "",
          links: [],
        },
      ],
      [
        {
          name: "SPORTS",
          desc: "Bespoke sports software solutions including sports apps, websites, and more!",
          href: "",
          links: [],
        },
        {
          name: "UTILITIES",
          desc: "Customised software solutions for the highly asset-intensive utility sector",
          href: "",
          links: [],
        },
      ],
      [
        {
          name: "FINANCE & FINTECH",
          desc: "Web and mobile apps that truly represent fintech's progress and advancements",
          href: "",
          links: [],
        },
        {
          name: "EDUCATION",
          desc: "Bridging the gap between education and technology via custom software",
          href: "",
          links: [],
        },
      ],
    ],
  },
  caseStudies: {
    name: "Case Studies",
    link: "/case-studies",
    isSubMenu: false,
    subMenu: {},
  },
  blog: {
    name: "Blog",
    link: "/blog",
    isSubMenu: false,
    subMenu: {},
  },
};

// mobile sub menu data
export const mobileNavLinks = {
  Services: {
    name: "Services",
    link: "/services",
    isSubMenu: true,
    subMenu: [
      {
        name: "Web App Development",
        href: "",
        links: [],
      },
      {
        name: "Bespoke Business Applications",
        href: "",
        links: [],
      },
      {
        name: "Mobile App Development",
        href: "",
        links: [
          {
            name: "B2B PORTAL DEVELOPMENT",
            href: "",
          },
          {
            name: "VENDOR PORTAL DEVELOPMENT",
            href: "",
          },
          {
            name: "CUSTOMER PORTAL DEVELOPMENT",
            href: "",
          },
        ],
      },
      {
        name: "Software Development Outsourcing",
        href: "",
        links: [
          {
            name: "WINDOWS DEVELOPMENT",
            href: "",
          },
          {
            name: "macOS DEVELOPMENT",
            href: "",
          },
        ],
      },
      {
        name: "Web Portal Development",
        href: "",
        links: [],
      },
      {
        name: "For Startups",
        href: "",
        links: [
          {
            name: "DEDICATED DEVELOPMENT TEAM",
            href: "",
          },
          {
            name: "IT STAFF AUGMENTATION",
            href: "",
          },
        ],
      },
      {
        name: "Desktop Development",
        href: "",
        links: [
          {
            name: "MVP DEVELOPMENT",
            href: "",
          },
          {
            name: "DISCOVERY WORKSHOPS",
            href: "",
          },
          {
            name: "VIRTUAL CTO",
            href: "",
          },
        ],
      },
      {
        name: "Product Development",
        href: "",
        links: [
          {
            name: "SaaS APPLICATION DEVELOPMENT",
            href: "",
          },
          {
            name: "WHITE LABEL SOFTWARE DEVELOPMENT",
            href: "",
          },
        ],
      },
      {
        name: "Software Project Rescue",
        href: "",
        links: [],
      },
      {
        name: "Support & Maintenance",
        href: "",
        links: [],
      },
      {
        name: "API Development & System Integration",
        href: "",
        links: [],
      },
      {
        name: "QA & Testing Services",
        href: "",
        links: [],
      },
      {
        name: "UI/UX Design",
        href: "",
        links: [],
      },
    ],
  },
  Technologies: {
    name: "Technologies",
    link: "/technologies",
    isSubMenu: true,
    subMenu: [
      {
        name: "Web Development",
        href: "",
        links: [
          {
            name: "Node.js",
            href: "",
          },
          {
            name: "PHP",
            href: "",
          },
          {
            name: ".NET",
            href: "",
          },
          {
            name: "JAVA",
            href: "",
          },
        ],
      },
      {
        name: "FrontEnd Development",
        href: "",
        links: [
          {
            name: "React",
            href: "",
          },
          {
            name: "Vue.js",
            href: "",
          },
          {
            name: "Angular",
            href: "",
          },
        ],
      },
      {
        name: "Mobile App Development",
        href: "",
        links: [
          {
            name: "iOS",
            href: "",
          },
          {
            name: "ANDROID",
            href: "",
          },
          {
            name: "CROSS-PLATFORM",
            href: "",
          },
        ],
      },
      {
        name: "Cloud Development",
        href: "",
        links: [
          {
            name: "MICROSOFT AZURE",
            href: "",
          },
          {
            name: "GOOGLE CLOUD PLATFORM",
            href: "",
          },
        ],
      },
    ],
  },
  Company: {
    name: "Company",
    link: "/company",
    isSubMenu: true,
    subMenu: [
      {
        name: "How We Work",
        href: "",
        links: [],
      },
      {
        name: "Technologies",
        href: "",
        links: [],
      },
      {
        name: "Our Process",
        href: "",
        links: [],
      },
      {
        name: "FAQs",
        href: "",
        links: [],
      },
      {
        name: "Pricing",
        desc: "Our time-tested process of developing efficient and fully custom software systems",
        href: "",
        links: [],
      },
    ],
  },
  Industries: {
    name: "Industries",
    link: "/industries",
    isSubMenu: true,
    subMenu: [
      {
        name: "Tech Industry",
        href: "",
        links: [],
      },
      {
        name: "Healthcare Industry",
        href: "",
        links: [],
      },
      {
        name: "Utility Industry",
        href: "",
        links: [],
      },
      {
        name: "Education Industry",
        href: "",
        links: [],
      },
      {
        name: "Finance Industry",
        href: "",
        links: [],
      },
      {
        name: "Sports Industry",
        href: "",
        links: [],
      },
    ],
  },
  CaseStudies: {
    name: "Case Studies",
    link: "/case-studies",
    isSubMenu: false,
    subMenu: [],
  },
  Blog: {
    name: "Blog",
    link: "/blog",
    isSubMenu: false,
    subMenu: [],
  },
};

// GET IN TOUCH DATA
export const doNext = [
  "Our team contacts you within one business day",
  "We engage an initial discussion to understand your requirements",
  "Our team of analysts and developers assess the scope and propose a way forward with mutual consultation",
  "All information exchange is protected via a mutual NDA",
];

// Footer links
export const footerLinks = [
  {
    href: "",
    title: "Web Application Development",
  },
  {
    href: "",
    title: "Mobile App Development",
  },
  {
    href: "",
    title: "Dedicated Development Team",
  },
  {
    href: "",
    title: "MVP Development",
  },
  {
    href: "",
    title: "Business Application Development Company",
  },
  {
    href: "",
    title: "SaaS App Development Company",
  },
  {
    href: "",
    title: "Software Project Rescue",
  },
];

// Footer bottom links
export const footerBottomLinks = [
  {
    href: "",
    title: "About us",
  },
  {
    href: "",
    title: "Case Studies",
  },
  {
    href: "",
    title: "Terms & Conditions",
  },
  {
    href: "",
    title: "Cookies Policy",
  },
  {
    href: "",
    title: "Privacy Policy",
  },
  {
    href: "",
    title: "Recruitment Policy",
  },
  {
    href: "",
    title: "Information Security Policy",
  },
  {
    href: "",
    title: "Sitemap",
  },
];

// Social links
export const socialLinks = [
  {
    name: "facebook",
    link: "",
    iconClass: "fa fa-facebook",
    iconImg: "",
  },
  {
    name: "google map location",
    link: "",
    iconClass: "",
    iconImg: "/assets/images/gmb-white.webp",
  },
  {
    name: "twitter",
    link: "",
    iconClass: "fa fa-twitter",
    iconImg: "",
  },
  {
    name: "youtube",
    link: "",
    iconClass: "fa fa-youtube",
    iconImg: "",
  },
  {
    name: "linkedin",
    link: "",
    iconClass: "fa fa-linkedin",
    iconImg: "",
  },
];

// Contact Details
export const contactDetails = [
  {
    icon: questionMark,
    title: "Got questions?",
    link: "mailto:contact@goodcore.com.uk",
    linkText: "contact@goodcore.co.uk",
    description:
      "Drop us an email to discuss your project ideas with us. We will be happy to answer your questions.",
  },
  {
    icon: hiringProfile,
    title: "Build your career!",
    link: "#",
    linkText: "careers@goodcore.co.uk",
    description:
      "Be a part of team GoodCore to open up a world of opportunities for your personal and professional growth.",
  },
];

// Contact Global location details
export const contactGlobalLocation = [
  {
    image: ukPlace,
    name: "Head Office",
    designation:
      "Airport House Purley Way <br />Croydon CR0 0XZ, <br /> United Kingdom <br />",
  },
  {
    image: malaysiaPlace,
    name: "Development Centre",
    designation:
      "SME CoPlace 2270 Jalan Usahawan <br />2 63000 Cyberjaya, <br /> Malaysia <br />",
  },
  {
    image: karachiOffice,
    name: "Development Centre",
    designation:
      "Finance & Trade Center <br />Block D, <br /> Main Shahra-e-Faisal, Karachi. <br />",
  },
];
