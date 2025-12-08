// Navigation Links in Navbar
const navLinks = [
    {
        name: "Home",
        link: "/",
    },
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
    {text: "Ideas", imgPath: "/images/ideas.svg"},
    {text: "Concepts", imgPath: "/images/concepts.svg"},
    {text: "Designs", imgPath: "/images/designs.svg"},
    {text: "Code", imgPath: "/images/code.svg"},
    {text: "Ideas", imgPath: "/images/ideas.svg"},
    {text: "Concepts", imgPath: "/images/concepts.svg"},
    {text: "Designs", imgPath: "/images/designs.svg"},
    {text: "Code", imgPath: "/images/code.svg"},
];

// Counter Items
const counterItems = [
    {value: 6, suffix: "+", label: "Years of Experience"},
    {value: 42, suffix: "+", label: "Satisfied Clients"},
    {value: 45, suffix: "+", label: "Completed Projects"},
    {value: 90, suffix: "%", label: "Client Retention Rate"},
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
        name: "Caducs Ltd",
        url: "https://caducs.com/",
        review: "AbdelRahman built and led the programming department from scratch, ensuring top-quality project delivery. His leadership and problem-solving skills made our collaboration seamless.",
        imgPath: "/images/client1.jpg",
    },
    {
        name: "MBITION",
        url: "https://mbition.io/",
        review: "Working with AbdelRahman was fantastic. He developed Mercedes-Benz web interfaces, improving performance and user experience significantly. Highly recommend him for complex projects.",
        imgPath: "/images/mbition.png",
    },
    {
        name: "Emil Frek Digital",
        url: "https://emilfreydigital.com/",
        review: "Collaborating with AbdelRahman on Emil Frey Digital platforms was a pleasure. His modern UI/UX designs and SEO improvements increased traffic and overall digital performance.",
        imgPath: "/images/emil.png",
    },
    {
        name: "Ahmed Abdelfattah",
        url: "https://www.linkedin.com/in/ahmed-abdelfattah-8b061432/",
        review: "Working with AbdelRahman was a pleasure. He consistently delivered high-quality work, showed great attention to detail, and collaborated effectively with the team. His contributions significantly improved our projects and client satisfaction.",
        imgPath: "/images/Ahmed Abdelfattah.jfif",
    },
    {
        name: "Ahmed Hossam",
        url: "https://www.linkedin.com/in/comp-eng-ahmed-hossam/",
        review: "AbdelRahman’s work on Mercedes-Benz and Emil Frey platforms boosted performance and responsiveness significantly, creating outstanding user experiences.",
        imgPath: "/images/Ahmed Hossam.jfif",
    },
    {
        name: "Nikola Novakovic",
        url: "https://www.linkedin.com/in/nikola-novakovic-9187664/?originalSubdomain=hr",
        review: "AbdelRahman demonstrated strong leadership and technical expertise, delivering multiple projects successfully and improving digital platforms' usability and traffic.",
        imgPath: "/images/Nikola Novakovic.jfif",
    },

];

// Footer Social Links
const socialImgs = [
    {
        name: "whats",
        imgPath: "/images/whatsapp.png",
        url: "https://wa.me/201013977924"
    },
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
    // Project 1 [Hong Kong]
    {
        id: 1,
        title: "Mac Portfolio",
        desc: "A highly interactive and creative personal portfolio website designed to replicate the macOS desktop experience directly in the browser. It features a fully functional dock, draggable windows, and a simulated file system interface to showcase projects, skills, and blog posts in an engaging and memorable way.",
        subdesc: [
            "Built with React 19 and Vite for blazing-fast performance, and styled with Tailwind CSS v4 to achieve a modern, pixel-perfect macOS aesthetic.",
            "It leverages GSAP (GreenSock Animation Platform) and its Draggable plugin to power complex animations, enabling smooth window dragging, resizing, and dynamic dock interactions.",
            "The application utilizes Zustand for robust global state management, efficiently handling the opening, closing, and z-index layering of multiple concurrent 'apps' like Finder, Terminal, and Safari.",
            "Features a simulated file system within the 'Finder' app, allowing users to navigate through folders to discover detailed project case studies, view a PDF resume, and explore a photo gallery."
        ],
        href: "https://mac-portfolio-jade.vercel.app/",
        spotlight: "/images/projects/mac-portfolio/mac-portfolio.png",
        buildWith: ["React", "Java Script"],
        github: "https://github.com/Abdulrahman-Mohamad/mac-portfolio.git",
        figmaurl: "https://www.figma.com/design/TyPLi9MtOJ7pKw0xZqBO79/Untitled?node-id=0-1&t=01UEWainr5Psmvlp-1",
        tags: [
            {
                id: 1,
                name: "React",
                path: "/images/logos/tech/react.png",
            },
            {
                id: 2,
                name: "TailwindCSS",
                path: "/images/logos/tech/tailwindcss.png",
            },
            {
                id: 3,
                name: "JavaScript",
                path: "/images/logos/tech/js.png",
            },
            {
                id: 4,
                name: "gsap",
                path: "/images/logos/tech/gsap.png",
            },
            {
                id: 5,
                name: "zustand",
                path: "/images/logos/tech/zustand.png",
            },

        ],
    },
    // Project 2 [SPORTS HUB]
    {
        id: 2,
        title: "SPORTS HUB",
        desc: "An interactive sports gaming platform offering predictions, trivia challenges, and prizes. It provides a smooth, secure, Arabic-English experience and was built for telecom companies in Bahrain.",
        subdesc: [
            "The project is an interactive sports gaming platform that allows users to participate in prediction games, trivia challenges, and win prizes.",
            "Built with Next.js 15, TypeScript, and Tailwind CSS, it fully supports both Arabic and English languages through next-intl for seamless localization.",
            "It relies on an advanced authentication system featuring JWT tokens and OTP verification, with state management handled via React Context.",
            "The application communicates with a backend API using axios with intelligent error handling and automatic retry mechanisms, providing a smooth user experience across all devices."
        ],
        href: "https://kasseb-website.vercel.app/en",
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
    // Project 3 [Ai Resume Analyzer]
    {
        id: 3,
        title: "AI Resume Analyzer",
        desc: "AI-powered resume analyzer that delivers instant feedback, highlights strengths, improves weak points, and boosts interview chances—with a fast, professional experience across all devices.",
        subdesc: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device."
        ],
        href: "https://ai-resume-analyzer-one-gold.vercel.app/",
        spotlight: "/images/projects/ai-resume-analyzer/ai-resume-analyzer.png",
        buildWith: ["React", "Java Script"],
        github: "https://github.com/Abdulrahman-Mohamad/ai-resume-analyzer.git",
        figmaurl: "https://www.figma.com/design/1ORO8ueSeJM8nyOUNDWHbf/AI-Resume-Analyzer?node-id=0-1&t=JPP4G0qP8QEcO0x7-1",
        tags: [
            {
                id: 1,
                name: "React Router",
                path: "/images/logos/tech/react-router.png",
            },
            {
                id: 2,
                name: "TailwindCSS",
                path: "/images/logos/tech/tailwindcss.png",
            },
            {
                id: 3,
                name: "JavaScript",
                path: "/images/logos/tech/js.png",
            },
            {
                id: 4,
                name: "gsap",
                path: "/images/logos/tech/gsap.png",
            },
            {
                id: 5,
                name: "Puter",
                path: "/images/logos/tech/puter.png",
            },
        ],
    },
    // Project 4 [4D Rotate]
    {
        id: 3,
        title: "3D Rotate",
        desc: "A visually immersive 3D product showcase built entirely with pure CSS, featuring interactive animations and parallax effects. It demonstrates the power of modern web styling by delivering a photorealistic rotating soda can experience without any JavaScript dependencies.",
        subdesc: [
            "The project showcases a realistic 3D rotating soda can effect that allows users to interactively switch product labels on hover, creating a dynamic and engaging visual experience.",
            "Built exclusively with HTML5 and Vanilla CSS, it utilizes advanced techniques such as mask-image and background-blend-mode to render complex textures and lighting effects directly in the browser.",
            "It leverages the modern :has() CSS selector to orchestrate environment animations, causing background elements to react and move in parallax when the user interacts with the main product.",
            "Designed with a responsive architecture, it ensures smooth, hardware-accelerated performance and adapts its layout and asset sizing seamlessly across desktop and mobile devices."
        ],
        href: "https://3d-rotate-lilac.vercel.app/",
        spotlight: "/images/projects/3drotate/3d-rotate.png",
        buildWith: ["Css"],
        github: "https://github.com/Abdulrahman-Mohamad/3dRotate.git",
        figmaurl: null,
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/images/logos/tech/html.png",
            },
            {
                id: 2,
                name: "Css",
                path: "/images/logos/tech/css.png",
            }
        ],
    },
    // Project 5 [Animate SVG]
    {
        id: 5,
        title: "Animate SVG",
        desc: "A captivating visual landing page that combines cinematic background animations with elegant SVG path drawing effects. It creates a dramatic entrance for the brand by synchronizing a “zoom-in/zoom-out” parallax environment with a self-drawing logo.",
        subdesc: [
            "The project features a sophisticated SVG line-drawing animation that simulates a handwritten signature effect using CSS stroke-dashoffset and fill transitions.",
            "It creates a cinematic depth of field by layering background images with opposing scale animations, where the background zooms in while the foreground overlay zooms out.",
            "Built entirely with HTML5 and CSS3, it demonstrates high-performance visual storytelling techniques and complex keyframe animations without relying on JavaScript libraries.",
            "The design focuses on a dramatic user entrance, seamlessly transitioning the logo from a delicate traced outline to a bold, solid white fill."
        ],
        href: "https://animate-svg-gamma.vercel.app/",
        spotlight: "/images/projects/animate-svg/animate-svg.PNG",
        buildWith: ["Css"],
        github: "https://github.com/Abdulrahman-Mohamad/animateSVG.git",
        figmaurl: null,
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/images/logos/tech/html.png",
            },
            {
                id: 2,
                name: "Css",
                path: "/images/logos/tech/css.png",
            }
        ],
    },
    // Project 6 [Auto Slider]
    {
        id: 6,
        title: "Auto Slider",
        desc: "A seamless, infinite scrolling image slider built entirely with HTML and CSS, featuring bidirectional animation support. It creates a dynamic visual flow where images continuously loop across the screen, offering an interactive user experience with pause-on-hover functionality.",
        subdesc: [
            "The project utilizes advanced CSS variables (--width, --height, --quantity) to calculate animation delays and positions dynamically, allowing for a fully customizable and responsive layout.",
            "It implements a smooth infinite loop using pure CSS keyframes (autoRun and reversePlay), enabling sliders to move in both forward and reverse directions without any JavaScript.",
            "Visual polish is added via mask-image to create elegant fade-out effects at the edges, ensuring a clean integration into the page background.",
            "Interactive elements include a hover state that pauses the animation and applies a grayscale filter to non-focused items, highlighting the user's selection."
        ],
        href: "https://auto-slider-fawn.vercel.app/",
        spotlight: "/images/projects/auto-slider/auto-slider.png",
        buildWith: ["Css"],
        github: "https://github.com/Abdulrahman-Mohamad/auto-slider.git",
        figmaurl: null,
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/images/logos/tech/html.png",
            },
            {
                id: 2,
                name: "Css",
                path: "/images/logos/tech/css.png",
            }
        ],
    },
    // Project 7 [Spider Animation]
    {
        id: 7,
        title: "Spider Animation",
        desc: "An interactive web animation that simulates a dynamic spider web effect using HTML5 Canvas and JavaScript. It features a network of particles that react to mouse movement, creating connections in real time to visualize proximity and interaction.",
        subdesc: [
            "The project utilizes the HTML5 Canvas API to render a field of randomized particles, each with unique properties like size, position, and color.",
            "It implements an interactive proximity detection algorithm in JavaScript that calculates the distance between the mouse cursor and each particle, drawing connecting lines when they are within a specific range.",
            "The visual experience is enhanced with a modern, dark-themed UI styled with CSS3, featuring gradient text effects and a responsive grid background.",
            "Optimized for performance, the animation efficiently handles real-time rendering and window resizing events to ensure a smooth and responsive user experience across different screen sizes."
        ],
        href: "https://spider-animation.vercel.app/",
        spotlight: "/images/projects/spider-animation/spider-animation.png",
        buildWith: ["Css", "Java Script"],
        github: "https://github.com/Abdulrahman-Mohamad/spider-animation.git",
        figmaurl: null,
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/images/logos/tech/html.png",
            },
            {
                id: 2,
                name: "Css",
                path: "/images/logos/tech/css.png",
            },
            {
                id: 3,
                name: "Java Script",
                path: "/images/logos/tech/js.png",
            }
        ],
    },
    // Project 8 [Hong Kong]
    {
        id: 8,
        title: "Hong Kong",
        desc: "An immersive scrolling experience that uses GSAP ScrollTrigger to animate a detailed vector city illustration. As the user scrolls, the view zooms into the architecture, peeling away layers of the building to reveal the interior, creating a dynamic storytelling effect.",
        subdesc: [
            "Built with GSAP (GreenSock Animation Platform) and ScrollTrigger, it orchestrates a complex timeline of animations where SVG elements scale, translate, and fade based on the user's scroll position.",
            "The project dynamically loads and manipulates an intricate SVG city model, allowing for high-quality, resolution-independent visuals that remain crisp at any zoom level.",
            "It features a pinned scroll section where the background stays fixed while the animation plays out, providing a cinematic 'enter-the-building' transition before releasing the user to the main content.",
            "Designed with a responsive layout using CSS Grid and Flexbox, ensuring the animation and content adapt seamlessly to different screen sizes."
        ],
        href: "https://hong-kong-rosy.vercel.app/",
        spotlight: "/images/projects/hong-kong/hong-kong.png",
        buildWith: ["Css", "Java Script"],
        github: "https://github.com/Abdulrahman-Mohamad/homg-kong.git",
        figmaurl: null,
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/images/logos/tech/html.png",
            },
            {
                id: 2,
                name: "Css",
                path: "/images/logos/tech/css.png",
            },
            {
                id: 2,
                name: "Java Script",
                path: "/images/logos/tech/js.png",
            }
        ],
    },
    // Project 9 [Hong Kong]
    {
        id: 9,
        title: "INK Animation",
        desc: "A visually captivating landing page effect that uses a dynamic ink spreading animation to reveal a background image. It demonstrates a creative use of CSS masking to create an organic, fluid transition that draws attention to the central content.",
        subdesc: [
            "The project utilizes the CSS mask-image property combined with a high-contrast GIF (ink_lv2.gif) to simulate an ink blot spreading across the screen, progressively revealing the underlying background.",
            "It features a clean, centered typography layout that overlays the animation, ensuring the core message remains the focal point amidst the visual effects.",
            "Built with pure HTML and CSS, it showcases how standard web technologies can be used to achieve cinematic, video-like masking effects without heavy JavaScript or canvas rendering.",
            "The design is fully responsive, with the background and mask scaling to cover the viewport (background-size: cover), providing a consistent visual experience across different screen sizes."
        ],
        href: "https://ink-animation.vercel.app/",
        spotlight: "/images/projects/ink-animation/ink-animation.png",
        buildWith: ["Css"],
        github: "https://github.com/Abdulrahman-Mohamad/ink-animation.git",
        figmaurl: null,
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/images/logos/tech/html.png",
            },
            {
                id: 2,
                name: "Css",
                path: "/images/logos/tech/css.png",
            }
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
