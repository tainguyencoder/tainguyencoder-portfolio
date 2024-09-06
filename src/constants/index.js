import {
  typescript,
  react,
  vue,
  tailwindcss,
  git,
  threejs,
  nextjs,
  nbk,
  iu,
  cyber,
  homeland,
  nft_cardgame,
  shirtai,
  facilitybot,
  okkami,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'edu',
    title: 'Education',
  },
  {
    id: 'project',
    title: 'Projects',
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
    title: 'TypeScript',
    icon: typescript,
  },
  {
    title: 'React',
    icon: react,
  },
  {
    title: 'VueJS ',
    icon: vue,
  },
  {
    title: 'TailwindCSS',
    icon: tailwindcss,
  },
];

const technologies = [
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'ThreeJS',
    icon: threejs,
  },
  {
    name: 'NextJS',
    icon: nextjs,
  },
];

const experiences = [
  {
    title: 'Front-end Web Developer',
    company_name: 'Facilitybot (Product of Robust Tech House)',
    icon: facilitybot,
    iconBg: '#383E56',
    date: 'Jan 2022 - Aug 2022',
    points: [
      'Implement the search function by drawing an area on the map',
      'Create CRUD pages with table that con sort, filter. Also forms and handle validation',
      'Implement drag and drop feature that can nest infinite levels, sort, filter, search for each row and have CRUD features',
      'Handle responsive column',
      'Use ChartJS to make a graph that show the statistics',
      'Create custom dashboard that help users can pin, arrange tables and statistical graphs',
    ],
  },
  {
    title: 'Front-end Web Developer',
    company_name: 'Okkami (Outsourcing project of Robust Tech House)',
    icon: okkami,
    iconBg: '#383E56',
    date: 'Sep 2022 - Present',
    points: [
      'Build the code base',
      'Configure Linters in code base, CICD using Github Actions and Dockerfile for DockerHub',
      'Code the UI/UX following the mobile app',
      'Handle responsive',
      'Write unit test and integration test using Jest & React Testing Library',
      'Deploy to Vercel for QA/QC from Okkami to test',
    ],
  },
];

const projects = [
  {
    name: 'Homeland',
    tech: 'ThreeJS',
    description:
      'Homeland is an innovative 3D web application designed to showcase my skills in 3D graphics and web development. Leveraging the power of ThreeJS and React Three Fiber, this project demonstrates my ability to create immersive and interactive experiences directly within a web browser.',
    tags: [
      {
        name: 'View Demo',
        color: 'blue-text-gradient',
      },
    ],
    image: homeland,
    source_code_link: 'https://github.com/tainguyencoder/homeland',
    demo_link: 'https://taikool.cloud/',
  },
  {
    name: 'Web 3 NFT Card Game',
    tech: 'ReactJS + Solidity',
    description:
      'The Online Multiplayer Web 3 NFT Card Game that allows users to create their characters, create and join live battles, choose their battleground, and battle other players in real-time!\
        This application uses AvalancheJS for the transactions to the X-Chain, P-Chain, and C-Chain.',
    tags: [
      {
        name: 'View Demo',
        color: 'pink-text-gradient',
      },
    ],
    image: nft_cardgame,
    source_code_link: 'https://github.com/tainguyencoder/nft_card_game',
    demo_link: 'https://tainguyencoder-nft-cardgame.netlify.app/',
  },

  {
    name: 'OpenAI-Powered 3D',
    tech: 'ThreeJS + OpenAI',
    description:
      'Utilize brand-new 3D customizing tool to make your special and unique T-shirt. Imagination at full throttle and define your personal style.\
        The best thing of this app is that generating images by using DALL-E - AI system that can create realistic images and art from a description in natural language.',
    tags: [
      {
        name: 'View Demo',
        color: 'green-text-gradient',
      },
    ],
    image: shirtai,
    source_code_link: 'https://github.com/tainguyencoder/openai-dalle-tshirt',
    demo_link: 'https://tainguyencoder-openai-dalle.netlify.app/',
  },
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
    major: '📚 Major: Computer Science 🧑‍💻🧑‍💻🧑‍💻',
    time: '📅 Time: 2017 - 2021',
    image: iu,
  },
  {
    name: 'Front-end development in CyberSoft Academy',
    major: '📚 Major:  Front-end Development',
    time: '📅 Time: 2021 - 2021',
    image: cyber,
  },
];

export { services, technologies, experiences, projects, schools };
