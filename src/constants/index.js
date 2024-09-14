const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'project',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'TypeScript',
    icon: '/assets/about/typescript.webp',
  },
  {
    title: 'React',
    icon: '/assets/about/react.webp',
  },
  {
    title: 'VueJS ',
    icon: '/assets/about/vue.webp',
  },
  {
    title: 'TailwindCSS',
    icon: '/assets/about/tailwindcss.webp',
  },
];

const technologies = [
  {
    name: 'Git',
    icon: '/assets/about/git.webp',
  },
  {
    name: 'ThreeJS',
    icon: '/assets/about/threejs.webp',
  },
  {
    name: 'NextJS',
    icon: '/assets/about/nextjs.webp',
  },
  {
    name: 'Docker',
    icon: '/assets/about/docker.webp',
  },
];

const schools = [
  {
    name: 'Nguyen Binh Khiem High School for the gifted',
    major: '📚 Major: Mathematics 📐📏📈',
    time: '📅 Time: 2011 - 2014',
    image: '/assets/education/nbk.webp',
  },
  {
    name: 'International University - VNU',
    major: '📚 Major: Computer Science 🧑‍💻🧑‍💻🧑‍💻',
    time: '📅 Time: 2017 - 2021',
    image: '/assets/education/iu.webp',
  },
  {
    name: 'Front-end development in CyberSoft Academy',
    major: '📚 Major:  Front-end Development',
    time: '📅 Time: 2021 - 2021',
    image: '/assets/education/cyber.webp',
  },
];

const projects = [
  // project1
  {
    title: 'Homeland - Wonderland',
    desc: 'Homeland is a cutting-edge 3D web application that highlights my expertise in 3D graphics and web development. This project showcases my ability to craft immersive and interactive experiences right in the browser, pushing the boundaries of web technology.',
    subdesc:
      'Developed using TypeScript, React, Three.js, and Tailwind CSS, Homeland exemplifies the seamless integration of 3D environments with responsive and performant web interfaces. It stands as a testament to my skills in building engaging, dynamic web applications that combine visual appeal with technical sophistication.',
    href: 'https://taikool.cloud/',
    texture: '/assets/projects/project1/clip.mp4',
    logo: '/assets/projects/project1/logo.webp',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/projects/project1/spotlight.webp',
    tags: [
      {
        id: 1,
        name: 'TypeScript',
        path: '/assets/projects/tech/typescript.webp',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/projects/tech/react.webp',
      },
      {
        id: 3,
        name: 'Solidity',
        path: '/assets/projects/tech/threejs.webp',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: 'assets/projects/tech/tailwindcss.webp',
      },
    ],
  },
  // project2
  {
    title: 'OpenAI-Powered 3D - Unleash Your Imagination',
    desc: 'StyleCraft is a groundbreaking 3D customization platform that empowers users to design unique and personalized T-shirts. With limitless creativity, users can unleash their imagination and define their own style through an intuitive 3D tool, creating one-of-a-kind apparel like never before.',
    subdesc:
      'Powered by the revolutionary DALL-E AI system, StyleCraft allows users to generate realistic and artistic designs from natural language descriptions, transforming their ideas into visually stunning creations. Built for customization enthusiasts, this platform offers an unmatched level of personalization and creativity.',
    href: 'https://tainguyencoder-openai-dalle.netlify.app/',
    texture: '/assets/projects/project2/clip.mp4',
    logo: '/assets/projects/project2/logo.webp',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/projects/project2/spotlight.webp',
    tags: [
      {
        id: 1,
        name: 'Javascript',
        path: '/assets/projects/tech/javascript.webp',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/projects/tech/react.webp',
      },
      {
        id: 3,
        name: 'Solidity',
        path: '/assets/projects/tech/threejs.webp',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: 'assets/projects/tech/tailwindcss.webp',
      },
    ],
  },
  // project3
  {
    title: 'Lime Solution - Your Partner in Digital Evolution',
    desc: 'Our IT software company specializes in turning visionary ideas into reality by providing cutting-edge digital solutions. We empower businesses to reach their full potential in an ever-evolving technological landscape, helping them achieve their digital transformation goals with innovation and efficiency.',
    subdesc:
      'Built using modern technologies like TypeScript, Next.js, and Tailwind CSS, our solutions are designed for high performance, scalability, and seamless user experiences. We ensure that businesses can stay ahead in a rapidly advancing tech world with robust and future-proof digital tools.',

    href: 'https://limesolutionco.com',
    texture: '/assets/projects/project3/clip.mp4',
    logo: '/assets/projects/project3/logo.webp',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/projects/project3/spotlight.webp',
    tags: [
      {
        id: 1,
        name: 'TypeScript',
        path: '/assets/projects/tech/typescript.webp',
      },
      {
        id: 2,
        name: 'Next.js',
        path: '/assets/projects/tech/nextjs.webp',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/projects/tech/tailwindcss.webp',
      },
    ],
  },
  // project4
  {
    title: 'Avax Gods - Web3 NFT Card Game',

    desc: 'BattleX is an innovative Online Multiplayer Web 3 NFT Card Game that revolutionizes the gaming experience by allowing users to create unique characters, engage in live battles, select diverse battlegrounds, and compete against other players in real-time. With seamless Web 3 integration, players can fully immerse themselves in the decentralized gaming ecosystem.',
    subdesc:
      'Developed using cutting-edge blockchain technology with AvalancheJS, BattleX facilitates secure and efficient transactions across the X-Chain, P-Chain, and C-Chain. Built for scalability and real-time performance, the game ensures a fast and reliable experience for players worldwide.',

    href: 'https://tainguyencoder-nft-cardgame.netlify.app/',
    texture: '/assets/projects/project4/clip.mp4',
    logo: '/assets/projects/project4/logo.webp',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/projects/project4/spotlight.webp',
    tags: [
      {
        id: 1,
        name: 'TypeScript',
        path: '/assets/projects/tech/typescript.webp',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/projects/tech/react.webp',
      },
      {
        id: 3,
        name: 'Solidity',
        path: '/assets/projects/tech/solidity.webp',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: 'assets/projects/tech/tailwindcss.webp',
      },
    ],
  },
];

const experiences = [
  {
    id: 1,
    name: 'Freelancer',
    pos: 'Front-End Web Developer',
    duration: 'Aug 2024 - Present',
    icon: '/assets/experience/freelancer.webp',
    animation: 'breakdance19',
    points: [
      'Develop landing pages using React and Tailwind CSS.',
      'Optimize web performance and create interactive UI elements.',
      'Ensure responsive design, compatibility, and SEO.',
    ],
  },
  {
    id: 2,
    name: 'Okkami',
    pos: 'Front-end Web Developer',
    duration: 'Sep 2022 - July 2024',
    icon: '/assets/experience/okkami.webp',
    animation: 'flair',
    points: [
      'Set up code base, Linters, CICD with GitHub Actions & DockerHub.',
      'Develop responsive UI/UX for the mobile app.',
      'Write tests and deploy to Vercel for QA/QC.',
    ],
  },
  {
    id: 3,
    name: 'Facilitybot',
    pos: 'Front-end Web Developer',
    duration: 'Jan 2022 - Aug 2022',
    icon: '/assets/experience/facilitybot.webp',
    animation: 'breakdancef',
    points: [
      'Map search and CRUD with sortable tables.',
      'Drag-and-drop with nesting and row CRUD.',
      'Dashboard with ChartJS and customizable layout.',
    ],
  },
];

export { navLinks, services, technologies, experiences, projects, schools };
