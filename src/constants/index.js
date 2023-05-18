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
  git,
  figma,
  docker,
  shirtai,
  openai,
  chatgpt,
  dashboard,
  gym,
  dicegame,
  wordle,
  twodportfolio,
  threejs,
  vuejs,
  bootstrap,
  antd,
  iu,
  nbk,
  cyber,
  chawarong,
  citynow,
  facilitybot,
  okkami,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'JavaScript TypeScript',
    icon: web,
  },
  {
    title: 'React Native',
    icon: mobile,
  },
  {
    title: 'ReactJS NextJS ',
    icon: backend,
  },
  {
    title: 'VueJS NuxtJS',
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: 'HTML 5',
  //   icon: html,
  // },
  // {
  //   name: 'CSS 3',
  //   icon: css,
  // },
  // {
  //   name: 'JavaScript',
  //   icon: javascript,
  // },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Vue JS',
    icon: vuejs,
  },
  {
    name: 'Ant Design',
    icon: antd,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  // {
  //   name: 'git',
  //   icon: git,
  // },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Fresher + Front-end Developer',
    company_name: 'CITYNOW',
    icon: citynow,
    iconBg: '#383E56',
    date: 'Oct 2021 - Jan 2022',
    points: [
      'Cloning ZingMp3 Web application using ReactJS.',
      'Learning NextJS.',
      'Coding function in HR soloution under the guidance of mentor.',
    ],
  },
  {
    title: 'Front-end Web Developer',
    company_name: 'Facilitybot (Product of Robust Tech House)',
    icon: facilitybot,
    iconBg: '#383E56',
    date: 'Feb 2022 - Jul 2022',
    points: [
      'Implemented the search function by drawing an area on the map.',
      'Created pages with table that con sort, filter. Also forms and handle validation.',
      'Implemented drag and drop feature that can nest infinite levels, sort, filter, search for each row and have CRUD features.',
      'Handle responsive column.',
    ],
  },
  {
    title: 'Front-end Web Developer',
    company_name: 'Okkami (Outsourcing project of Robust Tech House)',
    icon: okkami,
    iconBg: '#383E56',
    date: 'Jul 2022 - Feb 2023',
    points: [
      'Base on the requirements, the mobile application, the designs in Fig ma, and \
      AP! from the back-end team from Okkami, build the new fully responsive \
      web application for them by using Next JS and CSS framework(Bootstrap 5).',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Tai Thanh Nguyen is a phenomenal developer. He handles responsibility well, and he is resourceful. I love working with him.',
    name: 'Chawarong Songserm',
    designation: 'QA/QC',
    company: 'Okkami',
    image: chawarong,
  },
];

const projects = [
  {
    name: 'AI-Powered 3D',
    tech: 'ThreeJS',
    description:
      'Utilize brand-new 3D customizing tool to make your special and unique T-shirt. Imagination at full throttle and define your personal style.\
        The best thing of this app is that generating images by using DALL-E - AI system that can create realistic images and art from a description in natural language.',
    tags: [
      {
        name: 'View Demo',
        color: 'blue-text-gradient',
      },
    ],
    image: shirtai,
    source_code_link: 'https://github.dev/taikool2121996/openai-dalle-tshirt',
    demo_link: 'https://taithanhnguyen-openai-dalle.netlify.app/',
  },
  {
    name: 'ChatGPT',
    tech: 'JavaScript',
    description:
      'With a sophisticated user interface that is similar to the ChatGPT, communication with the text-davinci-003,\
      and most significantly, the capability to ask the AI for assistance using any programming language and give it code that can be translated to another programming language.',
    tags: [
      {
        name: 'View Demo',
        color: 'pink-text-gradient',
      },
    ],
    image: chatgpt,
    source_code_link: 'https://github.dev/taikool2121996/openai-chat',
    demo_link: 'https://taithanhnguyen-chatgpt.netlify.app/',
  },
  {
    name: 'OpenAI Summarizer',
    tech: 'ReactJS',
    description:
      'Summarize your articles with OpenAI GPT-4 ? This app is Article Summarizer - an open-source article summarizer that transforms lengthy articles into succinct summaries.\
        Using Redux Toolkit to manage statement, local storage to save history, RapidAPI to get data and TailwindCSS for styling.',
    tags: [
      {
        name: 'View Demo',
        color: 'green-text-gradient',
      },
    ],
    image: openai,
    source_code_link: 'https://github.dev/taikool2121996/openai_summizer',
    demo_link: 'https://taithanhnguyen-articlesummarizer.netlify.app/',
  },
  {
    name: 'Admin Dashboard',
    tech: 'Syncfusion React',
    description:
      'Admin Dashboard includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts. Context API is used to manage statement. The most important in this app is React Syncfusion - World Best UI Component Suite for Building Powerful Web, Desktop, and Mobile Apps.',
    tags: [
      {
        name: 'View Demo',
        color: 'blue-text-gradient',
      },
    ],
    image: dashboard,
    source_code_link: 'https://github.dev/taikool2121996/admin-dashboard',
    demo_link: 'https://taithanhnguyen-admin-dashboard.netlify.app/',
  },
  {
    name: '2D Portfolio',
    tech: 'React Bricks',
    description:
      'Besides this 3D portfolio was built with NextJS, I also built a modern 2D portfolio using React Bricks with visual editing for NextJS, also using Tailwind CSS for styling.\
      The goal of creating a 2D portfolio is to display my portfolio. Moreover, this project is teaching me more about content management systems.',
    tags: [
      {
        name: 'View Demo',
        color: 'pink-text-gradient',
      },
    ],
    image: twodportfolio,
    source_code_link: 'https://github.dev/taikool2121996/my-portfolio',
    demo_link: 'https://resplendent-nasturtium-8a7d0a.netlify.app/',
  },
  {
    name: 'Gym Exercises',
    tech: 'ReactJS',
    description:
      'This fitness app offers a variety of options, including the ability to select particular muscle groups and exercise categories, browse over a thousand activities with detailed instructions, pagination, and associated YouTube videos, display similar workouts, and much more.',
    tags: [
      {
        name: 'View Demo',
        color: 'green-text-gradient',
      },
    ],
    image: gym,
    source_code_link: 'https://github.com/taikool2121996/gym-exercises',
    demo_link: 'https://taithanhnguyen-gym-exercises.netlify.app/',
  },
  {
    name: 'Wordle Game',
    tech: 'React Native',
    description:
    'A Wordle Clone Game built on React Native using JavaScript. In this app, I used AsyncStorage from Expo to manage the game state for different days and years.\
    In oder to play this demo, you need to download and install EXPO GO, then scan the QR code.',
    tags: [
      {
        name: 'View Demo',
        color: 'blue-text-gradient',
      },
    ],
    image: wordle,
    source_code_link: 'https://github.com/taikool2121996/wordle',
    demo_link:
    'https://expo.dev/@taikool2121996/Wordle?release-channel=default',
  },
  {
    name: 'Mini Dice Game',
    tech: 'NextJS',
    description:
      'I build this mini game to consolidate knowledge using NextJS, Redux (Saga + Toolkit) to mange the statement, ESLint(airbnb) + Prettier + StyleLint + Lint-Staged + Husky for convention code, Bootstrap 5 + styled-component for styling, Next Cloudinary to optimize images.',
    tags: [
      {
        name: 'View Demo',
        color: 'pink-text-gradient',
      },
    ],
    image: dicegame,
    source_code_link: 'https://github.com/taikool2121996/gamexucxac',
    demo_link: 'https://taikool2121996.github.io/gamexucxac',
  }
];

const schools = [
  {
    name: 'Nguyen Binh Khiem High School for the gifted',
    major: '📚 Major: Mathematics 📐📏📈',
    time: '📅 Time: 2011 - 2014',
    image: nbk,
  },
  {
    name: 'International University - VNU',
    major: '📚 Major: Food Technology 🌾🌾🌾',
    time: '📅 Time: 2014 - 2017',
    image: iu,
  },
  {
    name: 'International University - VNU',
    major: '📚 Major: Computer Science and Engineering 🧑‍💻🧑‍💻🧑‍💻',
    time: '📅 Time: 2017 - 2021',
    image: iu,
  },
  {
    name: 'CyberSoft Academy',
    major: '📚 Major:  Front-end Development',
    time: '📅 Time: 2021 - 2021',
    image: cyber,
  },
];

export { services, technologies, experiences, testimonials, projects, schools };
