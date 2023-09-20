import {
  CurlyBracketIcon,
  ServerNetworkIcon,
  WordPressIconIcon,
  GraphicsIcon,
  OtherSkillsIcon,
  PulseIcon,
} from '../svgIcons';

export const skillData = [
  {
    id: 1,
    name: 'Frontend Development',
    icon: <CurlyBracketIcon width="40" height="40" fill="#9932cc" />,
    experience: '2+ Years experience',
    skills: [
      {
        name: '🚀 HTML/CSS/JavaScript',
      },
      {
        name: '🚀 SCSS, Material-UI, TailwindCSS',
      },
      {
        name: '🚀 ReactJS, GatsbyJS, NextJS',
      },
      {
        name: '🚀 Typescript',
      },
    ],
  },
  {
    id: 2,
    name: 'Backend Development',
    icon: <ServerNetworkIcon width="40" height="40" fill="#9932cc" />,
    experience: '',
    skills: [
      {
        name: '🚀 StrapiCMS, Headless WordPress',
      },
      {
        name: '🚀 Go, Basic NodeJs/ExpressJS',
      },
      {
        name: '🚀 Firebase, MongoDB, PostgreSQL, MySQL',
      },
    ],
  },
  {
    id: 3,
    name: 'Web Design - WordPress',
    icon: <WordPressIconIcon width="40" height="40" fill="#9932cc" />,
    experience: '4+ Years experience',
    skills: [
      {
        name: '🚀 Elementor',
      },
      {
        name: '🚀 WP Bakery',
      },
      {
        name: '🚀 Woocommerce, e.t.c',
      },
    ],
  },
  {
    id: 4,
    name: 'Graphics Design',
    icon: <GraphicsIcon width="40" height="40" fill="#9932cc" />,
    experience: '5+ Years experience',
    skills: [
      {
        name: '🚀 Adobe Photoshop',
      },
      {
        name: '🚀 Adobe Illustrator',
      },
      {
        name: '🚀 Corel Draw',
      },
    ],
  },
  {
    id: 5,
    name: 'Other Tech Skills',
    icon: <OtherSkillsIcon width="40" height="40" fill="#9932cc" />,
    experience: '',
    skills: [
      {
        name: '🚀 Jest',
      },
      {
        name: '🚀 GraphQL, REST API',
      },
      {
        name: '🚀 Redux',
      },
      {
        name: '🚀 Git',
      },
    ],
  },
];

export const ServicesData = [
  {
    id: 1,
    icon: <WordPressIconIcon width="30" height="30" fill="#9932cc" />,
    title: 'Web Design - WordPress',
    subtitle: 'Design, Hosting, SEO, Security',
    description: 'Project Planning and Implementation',
    services: [
      {
        id: 1,
        service: 'Gather the project requirements and analyse them',
      },
      {
        id: 2,
        service: 'Plan the data and sketch a design',
      },
      {
        id: 3,
        service: 'Choose a theme or setup Elementor Builder if custom',
      },
      {
        id: 4,
        service: 'Design, Send for review, modify and closeout project',
      },
    ],
  },
  {
    id: 2,
    icon: <CurlyBracketIcon width="30" height="30" fill="#9932cc" />,
    title: 'Software Development/Deployment',
    subtitle: 'UI Design, Frontend and Backend',
    description: 'Frontend and Backend',
    services: [
      {
        id: 1,
        service: 'Gather project requirements and plan them',
      },
      {
        id: 2,
        service: 'Create mockups if not provided and send for review',
      },
      {
        id: 3,
        service: 'Develop the backend (API) using StrapiCMS or Go',
      },
      {
        id: 4,
        service:
          'Develop the User Interface using ReactJS/NextJS/GatsbyJS based on project requirements',
      },
      {
        id: 5,
        service: 'Send for review and deploy when aproved',
      },
    ],
  },
  {
    id: 3,
    icon: <GraphicsIcon width="30" height="30" fill="#9932cc" />,
    title: 'Graphics Design',
    subtitle: 'Branding',
    description: 'Flyer, Logo, Brochure, Magazine, e.t.c',
    services: [
      {
        id: 1,
        service: 'Business Branding',
      },
      {
        id: 2,
        service:
          'Design Flyer, banner, logo, Brochure, Magazine, Card, Book Cover',
      },
    ],
  },
  {
    id: 4,
    icon: <PulseIcon width="30" height="30" fill="#9932cc" />,
    title: 'Web Maintenance',
    subtitle: 'Update, SEO, Security, Design, Accessibility',
    description: 'Keep up to date',
    services: [
      {
        id: 1,
        service:
          'Ensure all tools are upto date and does not pose any security risk',
      },
      {
        id: 2,
        service: 'Ensure site can be accessed by all users',
      },
      {
        id: 3,
        service: 'Ensure site ranks high on search engines',
      },
      {
        id: 4,
        service: 'Modify design when necessary to keep it appealing',
      },
    ],
  },
];

export const PortfolioData = [
  {
    id: 1,
    img: '/assets/flow_wireframe.jpg',
    title: 'FLOWS',
    subtitle: 'ALX Team Project',
    description:
      'FLOWS (Flood Warning System) is data-driven tool which will leverage machine learning models to detect when there is a high possibility of a flood occurring in the future and send out warnings to the Government and the Citizens in the coastal areas.',
    link: 'https://miro.com/app/board/uXjVM3lK070=/?share_link_id=497279673534',
  },
  {
    id: 2,
    img: '/assets/booking_app.png',
    title: 'Booking App',
    subtitle: 'Personal Project',
    description:
      'This is an Hotel Booking and Reservation app, developed with Go, HTML and Bootstrap. Developing this app, I learnt the concepts of backend development, Go programming language, Authentication, security, Request tokens, sessions, routing, Postgres, Database design  and management, setting DB migration files, and more...',
    link: 'https://go-booking.onrender.com',
    githubLink: 'https://github.com/prosper74/booking-project',
  },
  {
    id: 3,
    img: '/assets/safe_haven.jpg',
    title: 'Safe Haven',
    subtitle: 'Personal Project',
    description:
      'A real estate website, built with NextJS and Strapi. In this project I learnt how to setup NextJS with typescript, redux, tailwindcss, eslint, Jest, Prettier. I also learnt how to; write test with Jest and React testing library, use cloudinary to store and retrieve images, use zod for form validation, use NextJS static/dynamic props, and more...',
    link: 'https://safe-haven-fe.vercel.app/',
    githubLink: 'https://github.com/prosper74/safe-haven-fe',
  },
  {
    id: 4,
    img: '/assets/tantalizers.png',
    title: 'The Tantalizers',
    subtitle: 'Client Project',
    description:
      'A restaurant website built with WordPress. Features; food ordering system, nice food menu, events and booking system.',
    link: 'https://thetantalizersca.com/',
  },
  {
    id: 5,
    img: '/assets/reactportfolio.jpg',
    title: 'React Portfolio',
    subtitle: 'Personal Project',
    description:
      'A react personal portfolio website with a cool animations and smooth scroll. The goal of this project is to build a react app with less libraries and dependencies.',
    link: 'https://dr0eu.csb.app/',
  },
  {
    id: 6,
    img: '/assets/gatsby.jpg',
    title: 'Gatsby Portfolio',
    subtitle: 'Personal Project',
    description:
      'A simple portfolio website built with GatsbyJS. In this project I learnt how to create page template using gatsby-node.js file, how to create an infinite bubble animation with HTML/CSS/JavaScript, how to use gatsby plugins for optimization (especially the gatsby image plugins).',
    link: 'https://gatsbyappbyprosper.netlify.app/',
  },
  {
    id: 7,
    img: '/assets/githubProfiler.jpg',
    title: 'Github Profiler',
    subtitle: 'Personal Project',
    description:
      "Displays github user's profile in a beautiful UI. I learnt some ReactJS concept like page routing, using axios to fetch data (consumed third party API), using Material UI, sending mails from front-end with email-js and integrating scss",
    link: 'https://githubprofilebyprosper.netlify.app/',
  },
  {
    id: 8,
    img: '/assets/loctech.png',
    title: 'Loctech',
    subtitle: 'Client Project',
    description:
      'Loctech is an e-learning app built with GatsbyJS and Strapi. This project exposed me to the JAMSTACK and CDN concepts, using apollo client, using gatsby plugins, understanding how gatsby cache works, setting up a PWA, using Markdown for contents and more.',
    link: 'https://www.loctechng.com/',
  },
];

export const QualificationsData = [
  {
    id: 1,
    type: 'education',
    qualifications: [
      {
        id: 1,
        title: 'Computer Science',
        subtitle: 'Abia State - Polytechnic',
        date: '2011 - 2016',
      },
      {
        id: 2,
        title: 'WASSCE',
        subtitle: 'Dave Christian Academy',
        date: '2006 - 2011',
      },
    ],
  },
  {
    id: 2,
    type: 'work',
    qualifications: [
      {
        id: 1,
        title: 'Software Engineer',
        subtitle: 'Metrovatech, Nigeria',
        date: '2020 - 2023',
      },
      {
        id: 2,
        title: 'WordPress Web Designer / Graphics Designer',
        subtitle: 'Codelab LLC, USA',
        date: '2018 - 2020',
      },
      {
        id: 3,
        title: 'Graphics Designer/Web Designer',
        subtitle: 'Telace Multimedia',
        date: '2015 - 2018',
      },
    ],
  },
];

export const TestimonialData = [
  {
    id: 1,
    img: '/assets/mike.jpg',
    name: 'Michael Nzegwu',
    designation: 'C.E.O Metrovatech',
    desc: 'We have worked on many different projects. Prosper is always focused on delivering the job on time',
  },
  {
    id: 2,
    img: '/assets/dr-charles.jpg',
    name: 'Dr. Charles Chukwu',
    designation: 'C.E.O WeildMasters Ltd.',
    desc: 'I love people that keep to their words. Prosper is one of them. And I am satisfied with what I got',
  },
  {
    id: 3,
    img: '/assets/abiye.jpg',
    name: 'Abiye Samuel',
    designation: 'C.E.O Punters Companion',
    desc: "He didn't just build the website, he also gave technical advice and support. nice guy",
  },
];

export const photos = [
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695160726/car_rentals_4_pf71ti.jpg",
    title: "Lunch Logistics Car Rental Service",
    width: 720,
    height: 720
  },
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695029418/car_rentals_1_yylzts.jpg",
    title: "Lunch Logistics Car Rental Service",
    width: 720,
    height: 720
  },
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695035020/favour_foods_asrjey.jpg",
    title: "Favour Foods",
    width: 1740,
    height: 2480
  },
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695072773/kpp_design_ligb0k.jpg",
    title: "Kings Place Parish Program",
    width: 1740,
    height: 2480
  },
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695071961/car_rentals_2_f2idnl.jpg",
    title: "Lunch Logistics Car Rental Service",
    width: 720,
    height: 720
  },
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695072782/smhos_nog_s95k5e.jpg",
    title: "Salvation Ministries - 5 Nights of Glory",
    width: 2480,
    height: 1740
  },
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695078436/bummi_design_ni4bjr.jpg",
    title: "Physical Makeup Beauty Classes",
    width: 720,
    height: 720
  },
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695078441/daves_treat_burger_s5bwfg.jpg",
    title: "Dave's Treat Burger",
    width: 720,
    height: 720
  },
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695078451/probus_logistics_1_enyoig.jpg",
    title: "Probus Logistics Services",
    width: 720,
    height: 720
  },
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695078458/probus_logistics_2_bzbuzu.jpg",
    title: "Probus Logistics Services",
    width: 720,
    height: 720
  },
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695128186/club_party_zdoxfv.jpg",
    title: "NFL Night club party",
    width: 720,
    height: 720
  }
  ,
  {
    src: "https://res.cloudinary.com/prosper-dev/image/upload/v1695151959/car_rentals_3_r7phur.jpg",
    title: "Lunch Logistics Car Rental Service",
    width: 720,
    height: 720
  }
];