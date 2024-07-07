import { avi } from "../assets/images";
import {
    calender,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    movie,
    music,
    nextjs,
    nodejs,
    password,
    portfolio,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    web
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#accbe1",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Full stack Developer",
        company_name: "Avi Game Studio",
        icon: avi,
        iconBg: "#a2d2ff",
        date: "May 2024 - Present",
        points: [
            "Developed and maintained online games on a dynamic game hub platform using Angular",
            "Collaborated with a talented team to create immersive gaming experience",
            "Focused on enhancing user interfaces and gameplay for better player experiences",
            "Utlized innovatve solutions to solve complex technical challenges",
            "Engaged in hands on learning and professional growth within a supportive environment.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/PeradheepY',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/peradheep-y/',
    }
];

export const projects = [
    {
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Particle Portfolio',
        description: 'My Personal Portfolio using React, particle, framer motion',
        link: 'https://github.com/PeradheepY/Portfolio-react-fm',
    },
    {
        iconUrl: music,
        theme: 'btn-back-green',
        name: 'Minimal Music player',
        description: 'Minimal music player with sample songs for hearing, minimal UI',
        link: 'https://github.com/PeradheepY/music-player-project',
    },
    {
        iconUrl: movie,
        theme: 'btn-back-blue',
        name: 'Cine Compass',
        description: 'Cine Compass is designed to offer a rich and interactive experience for movie and TV series enthusiasts.',
        link: 'https://github.com/PeradheepY/cine-compass',
    },
    {
        iconUrl: web,
        theme: 'btn-back-pink',
        name: 'IDA Creations',
        description: 'Web page for IDA Creations done using react js, email js for direct mail to client used at the contact us section',
        link: 'https://github.com/PeradheepY/IDA-Creations-React--prjt',
    },
    {
        iconUrl: password,
        theme: 'btn-back-black',
        name: 'OTP Authentication System',
        description: 'A complete OTP (One-Time Password) authentication system using the MERN (MongoDB, Express.js, React.js, Node.js) stack. With this system, users can register for an account, verify their identity using OTP sent to their mobile number or email, and securely authenticate themselves.',
        link: 'https://github.com/PeradheepY/Innobyte-FSD-Intern-Project',
    },
    {
        iconUrl: calender,
        theme: 'btn-back-yellow',
        name: 'Leap Year Checker',
        description: 'App that checks, whether the given input will come as leap year',
        link: 'https://github.com/PeradheepY/leap-year-checker',
    }
];