import {
  CurlyBracketIcon,
  WordPressIconIcon,
  GraphicsIcon,
  PulseIcon,
} from '../common/svgIcons';

export const data = [
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
        service:
          'Develop the backend (API) using NodeJS/ExpressJS or StrapiCMS',
      },
      {
        id: 4,
        service:
          'Build the User Interface using ReactJS/NextJS/GatsbyJS based on project requirements',
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
