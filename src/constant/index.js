import questionMark from "../../public/assets/images/question-mark.webp"
import hiringProfile from "../../public/assets/images/hiring-profile.webp";

// global location image
import ukPlace from "../../public/assets/images/uk-place.webp";
import malaysiaPlace from "../../public/assets/images/malaysia-place.webp";
import karachiOffice from "../../public/assets/images/karachi-office.webp";

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
          href: "",
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

// company faq
export const companyFaqs = [
  {
    id: "faq1",
    question: " What kind of customers does GoodCore work with? ",
    answer:
      " We work with startups, small- and medium-sized businesses, large organisations, and public sector organisations, belonging to a wide range of industries such as finance, education, technology, and healthcare. ",
  },
  {
    id: "faq2",
    question: " I am a One Person Company. Would GoodCore work with me? ",
    answer:
      " We work with companies of all sizes, from small startups to large enterprises. We do not exclude anyone merely on the basis of the number of employees or owners. In fact, we have worked with many startups over the years, some of whom have grown tremendously. ",
  },
  {
    id: "faq3",
    question: " How can I get started? ",
    answer:
      " An important step to get started with your project is communicating your requirements to us. After you contact us, we conduct an initial discussion to understand your requirements to quickly determine the indicative project scope and costs and identify any significant project risks. ",
  },
  {
    id: "faq4",
    question: " How soon will my inquiry be acknowledged? ",
    answer:
      " When you send us a query through our website’s contact form, email, or telephone, our team contacts you within one business day. ",
  },
  {
    id: "faq5",
    question:
      " What does GoodCore offer besides bespoke software development? ",
    answer:
      " We offer a wide variety of professional services including consultation, software project rescue,  UI/UX design,  systems integration,  support and maintenance, and quality assurance and software testing services. ",
  },
  {
    id: "faq6",
    question: " Does GoodCore advise on applications' server hosting? ",
    answer:
      " All applications developed have to be hosted somewhere. We advise our customers on what hosting provider to choose along with the correct specifications for the servers. ",
  },
  {
    id: "faq7",
    question:
      " Why should I choose bespoke software development for my business? ",
    answer:
      " There is a plethora of off-the-shelf software available for different business requirements, and if you have fairly straight-forward requirements, then using an off-the-shelf software might be best for you. But if (A) you have a complex set of requirements that are beyond the scope of standard off-the-shelf solutions, or (B) you choose to invest in software development rather than paying the recurring hefty license fees for off-the-shelf solutions, then bespoke software development would be best suited for you. ",
  },
  {
    id: "faq8",
    question: " How does GoodCore develop software for startups? ",
    answer:
      " We understand what it takes to get a startup up and running. For startups, we undertake the software development through an iterative process, starting out with an MVP (Minimum Viable Product) that features all the things that absolutely must be in the application to effectively test the market out. ",
  },
  {
    id: "faq9",
    question: " What is a Minimum Viable Product (MVP)? ",
    answer:
      " A minimum viable product is a simpler version of your product which is built with all the core functionalities and features. An MVP is developed and launched as the first phase of development that helps to test out your product in the market, determines the potential of your ideas, and helps attract investors and partners early on. This significantly reduces your risks and chances of failure and helps develop a final product that meets the market expectations and provides maximum value to the customers. ",
  },
  {
    id: "faq10",
    question: " What is a Minimum Viable Product (MVP)? ",
    answer:
      " A minimum viable product is a simpler version of your product which is built with all the core functionalities and features. An MVP is developed and launched as the first phase of development that helps to test out your product in the market, determines the potential of your ideas, and helps attract investors and partners early on. This significantly reduces your risks and chances of failure and helps develop a final product that meets the market expectations and provides maximum value to the customers. ",
  },
  {
    id: "faq11",
    question:
      " How detailed a set of requirements is needed to get a project estimation for us? ",
    answer:
      " Since the first step of a project estimation exercise is to fully understand the project’s requirements, we always urge our clients to provide us with as much information as possible that helps describe the project, such as the set of functional and non-functional requirements, business logic, competitive landscape, personas of end-users, wireframes etc. ",
  },
  {
    id: "faq12",
    question:
      " I have an idea for a software application but I don’t know a lot about the technical specifications. Can GoodCore help me with that? ",
    answer:
      " Software development is a highly technical process. Therefore, we do not expect you to have perfect knowledge of the technical domain. We have a team of professionals who would be happy to help you understand all the technical aspects of your project so that you can make the right decisions. We expect you to know your functional requirements, while we manage the technical side of things. ",
  },
  {
    id: "faq13",
    question:
      " I have drawn up some wireframes for my product idea. Can you work with those? ",
    answer:
      " Most clients who approach us expect us to start from scratch, i.e. at the discovery stage where we note the requirements of the clients. Then comes the rest of the software development process, including software design and architecture. However, if you already have a design in mind in the form of blueprints or wireframes, that’s great, you already have a head start! We can go through them together and discuss how to build your product further upon them. ",
  },
  {
    id: "faq14",
    question:
      " I am in the middle of development with another company but I am not happy with their work. Can you help? ",
    answer:
      " If your current development team is not delivering up-to-the-mark results, we will be happy to take over, rescue your project, and see it to successful completion and implementation. Although this is a very tricky exercise, we are willing to explore the possibility of us taking over the code from another company. ",
  },
  {
    id: "faq15",
    question:
      " I want to move over an existing project. Can GoodCore help me with that? ",
    answer:
      " If your product was developed by another company, we can explore taking it over from the other company. Generally, cooperation from your existing provider is needed. Such projects are always tricky and each project is different from the other, but we are willing to dig deeper to find out if it’s something that we can help with. ",
  },
  {
    id: "faq16",
    question: " What are your software development costs? ",
    answer:
      " The costs of software development vary from project to project based on various factors, such as the scope, requirements, and technical complexity. We will determine the cost of your project after a thorough discussion with you to understand your requirements and assess the scope of your project. The final cost of software development comprises four major components: Development, Project Management, Quality Assurance, and UI/UX Design. ",
  },
  {
    id: "faq17",
    question: " What are GoodCore’s terms of payment? ",
    answer:
      " Payments are based on certain milestones. There is generally an upfront payment that is required to initiate the project followed by further payments at different stages of the product development cycle. You can expect a total of 4-5 payment milestones. ",
  },
  {
    id: "faq18",
    question: " What kind of contract options do I have? ",
    answer: " There are four options which you can choose from: ",
  },
  {
    id: "faq19",
    question:
      " How will GoodCore’s team stay in touch with me? Do you have a reliable communication and collaboration channel? ",
    answer:
      " Our team will be available to you at all times via any communication channel of your choice, be it via phone, email, live chat, or any other messaging service. We also use different collaboration tools, such as Redmine, to communicate with our customers. Zoom is another key tool that we use to stay in touch with customers. ",
  },
  {
    id: "faq20",
    question:
      " Who will be my main point of contact? Do I work directly with the developers? ",
    answer:
      " We will assign a relevant professional (usually the Project Manager) for this purpose. It’s always a lot more efficient and productive to work through Project Managers and not developers.Our team will be available to you at all times via any communication channel of your choice, be it via phone, email, live chat, or any other messaging service. We also use different collaboration tools, such as Redmine, to communicate with our customers. Zoom is another key tool that we use to stay in touch with customers. ",
  },
  {
    id: "faq21",
    question: " What happens after my project goes live? ",
    answer:
      " Once your project is launched, our team will provide 24/7 support in case any problems arise. You can also subscribe for periodic maintenance with a package of your choice. ",
  },
  {
    id: "faq22",
    question: " Who will own the Intellectual Property rights for my project? ",
    answer:
      " You will be the sole owner of the project. Period. We are merely here to help bring your idea to life. We do not own it at any stage of the development process. ",
  },
  {
    id: "faq23",
    question: " Will my software be GDPR-compliant? ",
    answer:
      " In case your business operates in the EU region or has (potential) customers in the EU, we will make sure that your software product follows all the laws and rules laid out in the GDPR legislation so that you do not face any legal challenges. ",
  },
  {
    id: "faq24",
    question: " What technologies do you work on? ",
    answer: " Our team is well-experienced at working with the latest ",
  },
  {
    id: "faq25",
    question: " What is GoodCore’s policy to ensure confidentiality? ",
    answer:
      " We understand the importance of protecting the valuable information you entrust us with. As per our policy, we sign a non-disclosure agreement (NDA) with you that legally binds us to hold all the information, including any propriety or project-related information exchanged during sales inquiries or over the course of our contract, in strict confidence. You can go through our complete ",
  },
];