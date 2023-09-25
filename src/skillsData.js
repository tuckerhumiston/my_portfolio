import HTMLLogo from "./styles/logos/HTML.png";
import HTMLIMG from "./styles/skills-photos/HTML.jpg"
import CSSLOGO from "./styles/logos/CSS.png";
import CSSIMG from "./styles/skills-photos/CSS.jpg"
import JSLOGO from "./styles/logos/JavaScript.png";
import JSIMG from "./styles/skills-photos/Javascript.png"
import SQLLOGO from "./styles/logos/SQL.png";
import SQLIMG from "./styles/skills-photos/SQL.png"
import SYSTEMVERILOGLOGO from "./styles/logos/SV.png";
import FPGA from "./styles/skills-photos/FPGA.png";

import REACT from "./styles/logos/React.png";
import REDUX from "./styles/logos/Redux.png";
import NODE from "./styles/logos/Node.png";
import EXPRESS from "./styles/logos/Express.png";

import BREADBOARD from "./styles/skills-photos/breadboard.jpg";
import CIRCUIT from "./styles/skills-photos/circuit.jpg";
import PONG from "./styles/skills-photos/pong.jpg";
import CALC from "./styles/skills-photos/calculus.avif";


const skillsData = [
    {
      id: 1,
      title: "Programming Languages",
      skills: [
        {
            id: 1,
            name: "HTML",
            description: "HTML is the standard markup language for documents designed to be displayed in a web browser. This language was my middle-school introduction to programming. I have since honed my skills in HTML, and I am now able to create responsive, accessible, dynamic web pages using HTML5.",
            learnedAt: "Codecademy",
            imageUrl: HTMLIMG,
            logo: HTMLLogo
        },
        {
            id: 2,
            name: "CSS",
            description: "Css is a stylesheet language used to describe the presentation of a document written in HTML or XML. This language was a natural progression from HTML. I now have a concrete understanding of CSS and it's capabilities. ",
            learnedAt: "Codecademy",
            imageUrl: CSSIMG,
            logo: CSSLOGO
        },
        {
            id: 3,
            name: "JavaScript",
            description: "JavaScript, often referred to as the 'language of the web,' is where my journey in programming truly began during my high school years. It ignited my passion for coding and opened the door to endless possibilities in web development. Currently, I use JavaScript every day and I am constantly learning new ways to implement it in my projects. <br><br>Some of my favorite projects include: A DNA Sequencer, A custom Credit Card Validator, and a cellular automata simulation shown here.",
            learnedAt: "Codecademy",
            imageUrl: JSIMG,
            logo: JSLOGO
        },
        {
            id: 4,
            name: "SQL",
            description: "SQL, or Structured Query Language, is the language that empowers me to dive into the intricate world of databases and data management. <br><br>Some of my favorite Projects include: A Custom Database for daily tasks and habits, and a baseball statistics database.",
            learnedAt: "Codecademy",
            imageUrl: SQLIMG,
            logo: SQLLOGO
        },
        {
            id: 5,
            name: "System-Verilog",
            description: "SystemVerilog, the language of digital design and FPGA programming, was my introduction to the world of Sequential Logic Systems during college. Through it, I brought projects like Pong games and 7-segment display controllers to life on FPGA boards. SystemVerilog enabled me to define digital system behavior, optimize performance, and rigorously validate designs.",
            learnedAt: "University of Maine, Orono",
            imageUrl: FPGA,
            logo: SYSTEMVERILOGLOGO
        },
        {
            id: 6,
            name: "Other",
            description: "Although minimal, I do have experiance working with C, C++, Python, and Java. I am always looking to expand my programming toolset.",
            learnedAt: "University of Maine, Orono",
        }
       
      ],
    },
    {
      id: 2,
      title: "Frameworks",
      skills: [
        {
          id: 1,
          name: "React.js",
          description: "React.js is a powerful JavaScript library for building user interfaces. With React, I've developed interactive and responsive web applications, harnessing the component-based architecture to create modular and maintainable code.  My experience with React includes building dynamic dashboards, e-commerce platforms, and data visualization tools, showcasing my ability to leverage this technology to create innovative and user-friendly web applications.",
          learnedAt: "Codecademy",
        //   imageUrl: "react-image-url.jpg",
            logo: REACT
        },
        {
            id: 2,
            name: "Redux.js",
            description: "Redux.js is a state management library that I've utilized to efficiently manage complex application states in my web development projects. With Redux, I've centralized application data and maintained a clear, predictable flow of information. I've designed and implemented Redux stores, reducers, and actions to handle data flow and synchronization across various components. This experience has allowed me to create seamless user interfaces with real-time updates, making data-driven applications a core strength in my skillset.",
            learnedAt: "Codecademy",
            // imageUrl: "redux-image-url.jpg",
            logo: REDUX
        },
        {
            id: 3,
            name: "Node.js",
            description: "Node.js is the server-side runtime environment that has empowered me to build scalable and efficient web applications. With Node.js, I've harnessed the power of JavaScript for both front-end and back-end development, creating full-stack solutions.",
            learnedAt: "Codecademy",
            // imageUrl: "node-image-url.jpg",
            logo: NODE
        },
        {
            id: 4,
            name: "Express.js",
            description: "Express.js is a minimalist and flexible Node.js web application framework that I've leveraged to rapidly build robust and scalable server-side applications. With Express.js, I've created RESTful APIs, developed dynamic web applications, and implemented middleware to enhance functionality and security. My experience includes routing, request handling, and database integration, making Express.js a vital tool in my web development toolkit. I've used it to design and deploy server applications that deliver high-performance and maintainability.",
            learnedAt: "Codecademy",
            // imageUrl: "express-image-url.jpg",
            logo: EXPRESS
        },
      ],
    },
    {
        id: 3,
        title: "Web Development Concepts",
        skills: [
            {
                id: 1,
                name: "Git/GitHub",
                description: "GitHub has been an integral part of my development workflow, serving as a collaborative platform to manage and showcase my code projects. I've used GitHub for version control and collaboration with teams.",
                learnedAt: "Codecademy",
                // imageUrl: "git-image-url.jpg",
            },
            {
                id: 2,
                name: "Authentication/ Authorization",
                description: "Authentication involves verifying user identities, ensuring only authorized individuals access protected resources. I've integrated various authentication methods, including username/password, OAuth, NextAuth, and JWT, to create secure user login systems. On the authorization front, I've designed role-based access control (RBAC) systems to manage user permissions, defining who can perform specific actions within an application. My expertise in these areas ensures data privacy, user trust, and secure data management in the applications I build.",
                learnedAt: "Codecademy",
                // imageUrl: "auth-image-url.jpg",
            },
            {
                id: 3,
                name: "Test Driven Development",
                description: "Test-Driven Development (TDD) is a cornerstone of my development approach. Using the Mocha test framework and the Chai assertion library, I follow a disciplined process of writing tests before writing code. This approach ensures that each component of my applications is rigorously tested, from unit tests to end-to-end testing. By adhering to TDD principles, I've achieved code reliability, reduced bugs, and streamlined the development process. ",
                learnedAt: "Codecademy",
                // imageUrl: "tdd-image-url.jpg",
            },
            {
                id: 4,
                name: "DevOps",
                description: "My studies encompassed key DevOps principles and practices, including the integration of development and operations teams, automation of deployment pipelines, and the adoption of continuous integration/continuous deployment (CI/CD) workflows. While my experience in this domain is currently limited, my dedication to understanding and applying DevOps methodologies is unwavering.",
                learnedAt: "Codecademy",
                // imageUrl: "devops-image-url.jpg",
            },
            {
                id: 5,
                name: "Web Security",
                description: "My journey into web security has been guided by the 10 fundamental principles established by OWASP (Open Web Application Security Project). These principles have equipped me with a comprehensive understanding of web security risks and countermeasures. I've explored areas such as injection attacks, authentication and session management, and security misconfigurations, among others.",
                learnedAt: "Codecademy",
                // imageUrl: "security-image-url.jpg",
            },
            {
                id: 6,
                name: "API Development",
                description: "API development is a dynamic aspect of my skill set, where I craft the interfaces that enable software components to communicate seamlessly. My experience includes designing and implementing RESTful APIs, ensuring efficiency, scalability, and robust data exchange. I've worked on projects involving data retrieval, authentication, and third-party integrations, enhancing my proficiency in API design.",
                learnedAt: "Codecademy",
                // imageUrl: "api-image-url.jpg",  
            },
            {
                id: 7,
                name: "Operating Systems",
                description: "While my expertise in operating systems may not be extensive, I have a foundational understanding of core concepts and functionalities. I've explored various operating systems, learning about process management, memory allocation, and file systems. My curiosity in this area drives me to continually expand my knowledge and explore the intricacies of operating systems.",
                learnedAt: "Codecademy",
                // imageUrl: "os-image-url.jpg",
            },
            {
                id: 8,
                name: "Database Design",
                description: "Database design, particularly with PostgreSQL, has been a rewarding aspect of my journey as a Full Stack Engineer. I have dedicated myself to crafting robust and efficient database structures that harness the power of PostgreSQL features. My experience includes schema design, optimization, and ensuring data consistency within PostgreSQL databases. This proficiency has allowed me to contribute to projects that demand high-performance data storage and retrieval.",
                learnedAt: "Codecademy",
                // imageUrl: "database-image-url.jpg",
            },
            {
                id: 9,
                name: "Data Structures & Algorithms",
                description: "My journey in data structures and algorithms has been marked by dedicated study and exploration. I've delved into the intricacies of linear and complex data structures, understanding their roles in optimizing data manipulation. I've also ventured into graph and search algorithms, appreciating their significance in solving intricate problems efficiently. Although my experience is not extensive, my commitment to mastering these concepts is unwavering. I've embraced the challenge of applying these principles in real-world scenarios, and I'm continually seeking opportunities to enhance my problem-solving prowess in the realm of programming.",
                learnedAt: "Codecademy",
                // imageUrl: "data-structures-image-url.jpg",
            }

        ],
    },
    {
        id: 4,
        title: "Computer Engineering Concepts",
        skills: [
            {
                id: 1,
                name: "Computer Architecture",
                description: "Computer architecture has been a lifelong passion, and I've had the privilege of bringing that passion to life through hands-on projects. As a hobby project, I meticulously crafted an 8-bit breadboard computer, which stands as a testament to my commitment to understanding and creating computing systems. This fascination with technology has been a driving force throughout my life, leading me to explore and experiment with devices like Raspberry Pis, Arduinos, FPGA boards, and more. My deep-rooted interest in computers, nurtured since my formative years, continues to inspire me to delve into the intricate world of computer architecture and its endless possibilities.",
                learnedAt: "Self Taught",
                imageUrl: BREADBOARD,
            },
            {
                id: 2,
                name: "Circuit Design & Analysis",
                description: "I have a strong foundation in circuit design and analysis, bolstered by hands-on experience with tools like spectrum analyzers and oscilloscopes. My practical skills complement my theoretical knowledge, allowing me to diagnose, troubleshoot, and optimize circuits efficiently.",
                learnedAt: "University of Maine, Orono",
                imageUrl: CIRCUIT,
            },
            {
                id: 3,
                name: "Digital Logic Design",
                description: "My proficiency in digital logic design has grown through coursework in sequential logic design and programming in C. I can create and analyze digital circuits, leveraging this knowledge to develop innovative solutions. I've successfully applied my digital logic design skills as part of a student team to create the classic PONG video game on an FPGA board. This hands-on experience enhanced my understanding of digital logic circuits and teamwork in real-world projects.",
                learnedAt: "University of Maine, Orono",
                imageUrl: PONG,
            },
            {
                id: 4,
                name: "Artificial Intelligence Optimization",
                description: "I possess a keen interest in AI and optimizing search algorithms, particularly in applications like Chat GPT. My focus lies in leveraging AI for business integration and automation, aiming to enhance operational efficiency and decision-making processes.",
                learnedAt: "Youtube",
                // imageUrl: "ai-image-url.jpg",
            },
            {
                id: 5,
                name: "Advanced Mathematics",
                description: "My proficiency in advanced mathematics extends to college-level courses, including Calculus 3 and differential equations. This foundation equips me with analytical and problem-solving skills that I apply effectively in various technical and engineering contexts.",
                learnedAt: "University of Maine, Orono",
                imageUrl: CALC,
            }
        ],
    }
    // Add more sections here...

  ];
  
  export default skillsData;
  