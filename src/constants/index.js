// Navigation Links in Navbar
const navLinks = [
    {
        name: "Work",
        link: "/work",
    },
    {
        name: "Experience",
        link: "/experience",
    },
    {
        name: "Blog",
        link: "/blog",
    },
    {
        name: "Testimonials",
        link: "/testimonials",
    },
];

// Words (Animated) in Hero Section
const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

// Counter Items
const counterItems = [
    { value: 6, suffix: "+", label: "Years of Experience" },
    { value: 42, suffix: "+", label: "Satisfied Clients" },
    { value: 45, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

// Logo Icons List (Animated)
const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

// Abilities
const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

// Tech Stack Icons (3D Models)
const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Next Developer",
        modelPath: "models/icons8-next.js-96.glb",
        scale: 1.6,
        rotation: [4.75, 3.15, 3.25],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

// Experience Cards
const expCards = [
    {
        review: "AbdelRahman showed remarkable leadership in building our programming department from scratch. His planning skills, team management, and consistent delivery made him a key contributor to our success and client satisfaction.",
        imgPath: "/images/caducs-name.png",
        logoPath: "/images/caducs.png",
        title: "Head of Programming",
        date: "Jun 2023 - July 2025",
        responsibilities: [
            "Established and led the Programming Department from scratch.",
            "Managed all software projects and ensured on-time, high-quality delivery.",
            "Supervised developers, assigned tasks, and reviewed work.",
            "Coordinated with clients and translated requirements into clear plans.",
            "Ensured 95%+ client satisfaction through strong project execution.",
        ],
    },
    {
        review: "AbdelRahman delivered impactful UX improvements and performance gains for Mercedes-Benz platforms, achieving measurable responsiveness upgrades across web and in-car interfaces.",
        imgPath: "/images/mbition-name.svg",
        logoPath: "/images/mbition.png",
        title: "Frontend Developer",
        date: " Jan 2021 – Apr 2023",
        responsibilities: [
            "Developed Mercedes-Benz web interfaces, enhancing digital experiences.",
            "Optimized in-car and web platforms, performance and responsiveness.",
            "Boosted performance by 40%+ through optimization and responsive design.",
        ],
    },
    {
        review: "AbdelRahman delivered multiple high-quality platforms for Emil Frey Digital, combining modern UI/UX with measurable SEO improvements that increased organic traffic and strengthened overall digital performance.",
        imgPath: "/images/Emil-name.svg",
        logoPath: "/images/emil.png",
        title: "Frontend Developer",
        date: "Jan 2020 – Nov 2020",
        responsibilities: [
            "Delivered Emil Frey Digital site plus 5 web platforms.",
            "Built modern UI/UX with React.js and Material UI.",
            "Improved SEO, raising organic traffic by 25%.",
        ],
    },
];

// Experience Logos
const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

// Testimonials Reviews
const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

// Footer Social Links
const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
        url: "https://www.instagram.com/abdulrahman_moh_93/"
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
        url: "https://www.facebook.com/AbdulRahmanmohammed93/"
    },
    {
        name: "x",
        imgPath: "/images/x.png",
        url: "https://x.com/AbdulRahma97784"
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url: "https://www.linkedin.com/in/abdulrahman-mohamad-0578bb192/"
    },
    {
        name: "Github",
        imgPath: "/images/github.png",
        url: "https://github.com/Abdulrahman-Mohamad"
    },
];

// My Projects
const myProjects = [
    {
        id: 1,
        title: "SPORTS HUB",
        desc: "An interactive sports gaming platform offering predictions, trivia challenges, and prizes. It provides a smooth, secure, Arabic-English experience and was built for telecom companies in Bahrain.",
        subdesc: [
            "The project is an interactive sports gaming platform that allows users to participate in prediction games, trivia challenges, and win prizes.",
            "Built with Next.js 15, TypeScript, and Tailwind CSS, it fully supports both Arabic and English languages through next-intl for seamless localization.",
            "It relies on an advanced authentication system featuring JWT tokens and OTP verification, with state management handled via React Context.",
            "The application communicates with a backend API using axios with intelligent error handling and automatic retry mechanisms, providing a smooth user experience across all devices."
        ],
        href: "https://comforting-marigold-32af46.netlify.app/en",
        spotlight: "/images/projects/sports-hub/cover.png",
        buildWith: ["Next", "Type Script"],
        github: null,
        figmaurl: "https://www.figma.com/design/rDcvfZxb70w6cisivBoYEc/SPORTS-HUB?node-id=0-1&t=m4BYkB6rdrI1DXw7-1",
        tags: [
            {
                id: 1,
                name: "Next.js",
                path: "/images/logos/tech/next.png",
            },
            {
                id: 2,
                name: "TailwindCSS",
                path: "/images/logos/tech/tailwindcss.png",
            },
            {
                id: 3,
                name: "TypeScript",
                path: "/images/logos/tech/ts.png",
            },
            {
                id: 4,
                name: "Framer Motion",
                path: "/images/logos/tech/framerMotion.png",
            },
        ],
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    navLinks,
    myProjects,
};
