export const config = {
    developer: {
        name: "Akshita",
        fullName: "Akshita Jain",
        title: "Building AI & Software Projects",
        description:
            "Computer Science undergraduate focused on building AI-driven applications and secure intelligent systems. Interested in Machine Learning, NLP, Computer Vision, and full-stack development."
    },

    social: {
        github: "Aksh1taJain",
        email: "akshitaj1010@gmail.com",
    },

    about: {
        title: "About Me",
        description:
            "I am a Computer Science undergraduate passionate about solving real-world problems using Artificial Intelligence and software development. I enjoy building intelligent systems involving computer vision, NLP, OCR, and secure data handling. My work focuses on transforming research-oriented ideas into practical applications through modern frameworks and scalable system design."
    },

    // experiences: [
    //     {
    //         position: "AI & Software Development Projects",
    //         company: "Academic & Personal Work",
    //         period: "2024 - Present",
    //         description:
    //             "Developing AI-driven applications and secure systems as part of academic and independent projects.",
    //         responsibilities: [
    //             "Building machine learning and deep learning applications",
    //             "Developing OCR and NLP-based intelligent systems",
    //             "Designing secure data handling applications",
    //             "Creating full-stack web and mobile solutions"
    //         ],
    //         technologies: [
    //             "Python",
    //             "TensorFlow",
    //             "React",
    //             "NLP",
    //             "Computer Vision",
    //             "Machine Learning"
    //         ]
    //     },
    //     {
    //         position: "Full-Stack Development Learning",
    //         company: "Academic Projects",
    //         period: "2023 - Present",
    //         description:
    //             "Working on web and mobile applications integrating frontend interfaces with backend AI systems.",
    //         responsibilities: [
    //             "Building responsive interfaces using React",
    //             "Developing backend logic using Python",
    //             "Database integration using MySQL",
    //             "Version control using GitHub"
    //         ],
    //         technologies: [
    //             "React",
    //             "JavaScript",
    //             "HTML",
    //             "CSS",
    //             "MySQL",
    //             "Git"
    //         ]
    //     },
    //     {
    //         position: "Programming & Problem Solving",
    //         company: "Self Learning",
    //         period: "2023",
    //         description:
    //             "Strengthened programming fundamentals, data structures knowledge, and software development concepts.",
    //         responsibilities: [
    //             "Learning Python, C++, and Java",
    //             "Practicing data structures and algorithms",
    //             "Building automation and academic projects",
    //             "Exploring AI and machine learning concepts"
    //         ],
    //         technologies: [
    //             "Python",
    //             "C++",
    //             "Java",
    //             "DSA",
    //             "Linux"
    //         ]
    //     }
    // ],

    projects: [
        {
            id: 1,
            title: "AI-Based Image Forgery Detection System",
            category: "AI / Computer Vision",
            technologies:
                "Python, TensorFlow, Keras, ConvNeXt, Flask, Streamlit",
            image: "/images/forgery.png",
            description:
                "Deep learning system for detecting AI-generated and manipulated images using ConvNeXt-Tiny and hybrid CNN models. Provides forgery prediction with confidence scores through a web interface."
        },
        {
            id: 2,
            title: "Scan2Learn",
            category: "AI / NLP",
            technologies:
                "React, Python, OCR, NLP, HuggingFace, MySQL",
            image: "/images/scan2learn.png",
            description:
                "Full-stack learning assistant that extracts text from handwritten notes and PDFs using OCR and NLP. Includes summarization, quiz generation, transliteration, and personalized learning analysis."
        },
        {
            id: 3,
            title: "Medical Report Encryption & Steganography",
            category: "Cybersecurity",
            technologies:
                "Python, OpenCV, Streamlit, Encryption",
            image: "/images/steganography.png",
            description:
                "Secure system for hiding and extracting medical data using text, image, and audio steganography combined with encryption and integrity verification."
        },
        {
            id: 4,
            title: "QuickMess",
            category: "Mobile Application",
            technologies:
                "React Native, Expo, TypeScript",
            image: "/images/quickmess.png",
            description:
                "Smart mess and cafe management mobile application enabling digital menu browsing, ticket-based entry, favorites tracking, and feedback collection."
        }
    ],

    contact: {
        email: "akshitaj1010@gmail.com",
        github: "https://github.com/Aksh1taJain",
        linkedin: "www.linkedin.com/in/akshita-jain10"
    },

    skills: {
    develop: {
        title: "AI & MACHINE LEARNING",
        description: "AI-powered web applications and intelligent systems",
        details:
            "Developing machine learning and deep learning applications involving image forgery detection, OCR pipelines, NLP processing, and secure data systems.",
        tools: [
            "Python",
            "TensorFlow",
            "Keras",
            "OpenCV",
            "Tesseract OCR",
            "Scikit-learn",
            "NumPy",
            "Pandas",
            "Machine Learning",
            "Deep Learning",
            "NLP",
            "Computer Vision"
        ]
    },

    design: {
        title: "WEB & MOBILE DEVELOPMENT",
        description: "Full-stack and mobile application development",
        details:
            "Building web and mobile applications with modern frontend technologies, database integration, and user-focused system design.",
        tools: [
            "React.js",
            "React Native",
            "Expo",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "MySQL",
            "Flask",
            "Streamlit",
            "Git",
            "Linux"
        ]
    }
    }
}