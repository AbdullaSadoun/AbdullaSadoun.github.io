export const projects = [
  { // sample project from template
    id: 1,
    featured: false,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    images: [
      {
        id: 1,
        url: "/projects/ecommerce-main.jpg",
        alt: "E-commerce Platform Dashboard",
        isMain: true
      },
      {
        id: 2,
        url: "/projects/ecommerce-products.jpg",
        alt: "Products Page",
        isMain: false
      },
      {
        id: 3,
        url: "/projects/ecommerce-cart.jpg",
        alt: "Shopping Cart",
        isMain: false
      },
      // Add more images...
    ],
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/yourusername/project",
    overview: "A comprehensive e-commerce platform built with modern technologies, focusing on real-time inventory management and seamless user experience.",
    challenge: "The main challenge was implementing real-time inventory tracking while handling high concurrent user transactions.",
    solution: "Implemented WebSocket connections for real-time updates and utilized Redis for caching frequently accessed data.",
    features: [
      "Real-time inventory tracking",
      "Secure payment processing",
      "Advanced search and filtering",
      "Admin dashboard with analytics",
      "Mobile-responsive design"
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Redux",
      "WebSocket",
      "Redis",
      "Stripe"
    ],
    results: "The platform achieved a 40% increase in sales conversion and reduced inventory discrepancies by 95%."
  },

  { // milton ai project
    id: 2,
    featured: true,
    slug: "lm-milton",
    title: "Lockheed Martin's AI",
    description: "An AI model and interface to aid in analyzing the clients training needs.",
    images: [
      {
        id: 1,
        url: "projects/lm-milton/milton-dashboard.png", 
        alt: "LM AI Dashboard",
        isMain: true
      },
      {
        id: 2,
        url: "/projects/lm-milton/main.png",
        alt: "Products Page",
        isMain: false
      },
      {
        id: 3,
        url: "/projects/ecommerce-cart.jpg",
        alt: "Shopping Cart",
        isMain: false
      },
      // Add more images...
    ],
    tags: ["AI", "ML", "NLP", "LLM", "Cloud", "Model Training"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/yourusername/project",
    overview: "A comprehensive e-commerce platform built with modern technologies, focusing on real-time inventory management and seamless user experience.",
    challenge: "The main challenge was implementing real-time inventory tracking while handling high concurrent user transactions.",
    solution: "Implemented WebSocket connections for real-time updates and utilized Redis for caching frequently accessed data.",
    features: [
      "Real-time inventory tracking",
      "Secure payment processing",
      "Advanced search and filtering",
      "Admin dashboard with analytics",
      "Mobile-responsive design"
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Redux",
      "WebSocket",
      "Redis",
      "Stripe"
    ],
    results: "The platform achieved a 40% increase in sales conversion and reduced inventory discrepancies by 95%."
  },

  { // cpu emulator project
    id: 3,
    featured: true,
    slug: "cpu-emulator-xm23p",
    title: "CPU Emulator - XM23P",
    description: "A CPU emulator for the XM23P processor, demonstrating low-level system architecture and instruction set implementation.",
    images: [
      {
        id: 1,
        url: "projects/cpu-emulator/main.jpg",
        alt: "CPU Emulator Interface",
        isMain: true
      }
    ],
    tags: ["CPU", "Emulator", "XM23P", "Assembly", "Low-level Programming"],
    demoLink: "",
    githubLink: "",
    overview: "A comprehensive CPU emulator that simulates the XM23P processor architecture, providing a platform for understanding computer architecture and assembly programming.",
    challenge: "Accurately implementing the complex instruction set while maintaining cycle-accurate timing and proper memory management.",
    solution: "Developed a modular architecture with separate components for instruction decode, execute, and memory management, ensuring accurate processor behavior.",
    features: [
      "Full instruction set implementation",
      "Memory management and addressing",
      "Register simulation",
      "Debugging interface",
      "Step-by-step execution"
    ],
    technologies: [
      "C++",
      "Assembly",
      "Qt Framework",
      "CMake",
      "GDB Integration"
    ],
    results: "Successfully created a functional CPU emulator that serves as both an educational tool and a platform for testing XM23P assembly code."
  },

  { // self navigating robot lead project
    id: 4,
    featured: true,
    slug: "self-navigating-robot-lead",
    title: "Self Navigating Robot - LEAD",
    description: "An autonomous robot system capable of self-navigation and environmental mapping.",
    images: [
      {
        id: 1,
        url: "projects/robot-lead/main.png",
        alt: "LEAD Robot System",
        isMain: true
      }
    ],
    tags: ["Robotics", "Autonomous Systems", "SLAM", "ROS", "Computer Vision"],
    demoLink: "",
    githubLink: "",
    overview: "A sophisticated robotics project implementing autonomous navigation and mapping capabilities using advanced sensors and control systems.",
    challenge: "Developing reliable simultaneous localization and mapping (SLAM) while handling real-time sensor data and obstacle avoidance.",
    solution: "Implemented ROS-based architecture with sensor fusion and advanced path planning algorithms.",
    features: [
      "Real-time SLAM",
      "Obstacle avoidance",
      "Path planning",
      "Sensor fusion",
      "Remote monitoring interface"
    ],
    technologies: [
      "ROS",
      "Python",
      "C++",
      "OpenCV",
      "LiDAR",
      "Arduino"
    ],
    results: "Created a fully autonomous robot capable of navigating complex environments while maintaining accurate positional awareness."
  },

  { // flight delay analysis project
    id: 5,
    featured: false,
    slug: "flight-delay-analysis",
    title: "Flight Delay Analysis",
    description: "A comprehensive analysis system for predicting and analyzing flight delays using machine learning.",
    images: [
      {
        id: 1,
        url: "projects/flight-analysis/dashboard.png",
        alt: "Flight Analysis Dashboard",
        isMain: true
      }
    ],
    tags: ["Data Analysis", "Machine Learning", "Aviation", "Predictive Analytics"],
    demoLink: "",
    githubLink: "",
    overview: "A data-driven project analyzing patterns in flight delays to create predictive models for airline operations.",
    challenge: "Processing and analyzing large datasets of historical flight data while accounting for multiple variables affecting delays.",
    solution: "Developed machine learning models using ensemble methods and time series analysis for accurate delay predictions.",
    features: [
      "Predictive delay modeling",
      "Weather impact analysis",
      "Route optimization",
      "Interactive visualizations",
      "Real-time predictions"
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Pandas",
      "Scikit-learn",
      "Tableau",
      "SQL"
    ],
    results: "Achieved 85% accuracy in delay predictions, helping airlines optimize their operations and reduce costs."
  },

  { // autonomous self driving vehicle simulation project
    id: 6,
    featured: false,
    slug: "autonomous-vehicle-simulation",
    title: "Autonomous Self Driving Vehicle Simulation",
    description: "A sophisticated simulation environment for testing autonomous vehicle algorithms and behaviors.",
    images: [
      {
        id: 1,
        url: "projects/autonomous-sim/main.png",
        alt: "Autonomous Vehicle Simulation",
        isMain: true
      }
    ],
    tags: ["Autonomous Vehicles", "Simulation", "AI", "Computer Vision"],
    demoLink: "",
    githubLink: "",
    overview: "A comprehensive simulation platform for developing and testing autonomous vehicle control systems in various scenarios.",
    challenge: "Creating realistic physics-based simulations while maintaining real-time performance and accurate sensor modeling.",
    solution: "Utilized advanced gaming engines and custom physics models to create realistic autonomous driving scenarios.",
    features: [
      "Physics-based vehicle dynamics",
      "Sensor simulation",
      "Traffic scenario generation",
      "Weather condition simulation",
      "Performance analytics"
    ],
    technologies: [
      "Unity3D",
      "C#",
      "Python",
      "TensorFlow",
      "CUDA",
      "ROS"
    ],
    results: "Successfully developed a robust simulation platform used for testing autonomous vehicle algorithms in various conditions."
  },

  { // underwater monitoring real time data analysis project
    id: 7,
    featured: false,
    slug: "underwater-monitoring",
    title: "Underwater Monitoring Real Time Data Analysis",
    description: "Real-time analysis system for underwater sensor networks monitoring marine environments.",
    images: [
      {
        id: 1,
        url: "projects/underwater-monitoring/dashboard.png",
        alt: "Underwater Monitoring Dashboard",
        isMain: true
      }
    ],
    tags: ["IoT", "Real-time Analysis", "Marine Technology", "Data Visualization"],
    demoLink: "",
    githubLink: "",
    overview: "An advanced monitoring system processing real-time data from underwater sensor networks for environmental analysis.",
    challenge: "Handling real-time data processing from multiple sensors while maintaining system reliability in harsh underwater conditions.",
    solution: "Implemented a distributed system architecture with robust error handling and data redundancy.",
    features: [
      "Real-time data processing",
      "Environmental monitoring",
      "Anomaly detection",
      "Predictive maintenance",
      "Data visualization"
    ],
    technologies: [
      "Python",
      "Node.js",
      "InfluxDB",
      "Grafana",
      "Docker",
      "AWS"
    ],
    results: "Created a reliable monitoring system processing data from over 100 sensors with 99.9% uptime."
  },

  { // cyber security analysis project
    id: 8,
    featured: false,
    slug: "cyber-security-analysis",
    title: "Cyber Security Attacks Analysis Project",
    description: "Advanced security analysis platform for detecting and preventing cyber attacks.",
    images: [
      {
        id: 1,
        url: "projects/security-analysis/main.png",
        alt: "Security Analysis Dashboard",
        isMain: true
      }
    ],
    tags: ["Cyber Security", "Threat Detection", "Network Analysis", "Machine Learning"],
    demoLink: "",
    githubLink: "",
    overview: "A comprehensive security analysis platform using machine learning to detect and prevent cyber attacks in real-time.",
    challenge: "Developing accurate threat detection while minimizing false positives and maintaining system performance.",
    solution: "Implemented advanced ML algorithms and behavior analysis for precise threat detection.",
    features: [
      "Real-time threat detection",
      "Network traffic analysis",
      "Behavioral analytics",
      "Automated response systems",
      "Forensic analysis tools"
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Elasticsearch",
      "Kibana",
      "Wireshark",
      "Snort"
    ],
    results: "Successfully detected and prevented multiple attack vectors with a 95% accuracy rate."
  },

  { // aircraft health monitoring and predictive maintenance project
    id: 9,
    featured: false,
    slug: "aircraft-health-monitoring",
    title: "Aircraft Health Monitoring and Predictive Maintenance",
    description: "Predictive maintenance system for aircraft using IoT sensors and machine learning.",
    images: [
      {
        id: 1,
        url: "projects/aircraft-monitoring/dashboard.png",
        alt: "Aircraft Monitoring Dashboard",
        isMain: true
      }
    ],
    tags: ["IoT", "Predictive Maintenance", "Aviation", "Machine Learning"],
    demoLink: "",
    githubLink: "",
    overview: "An advanced monitoring system that uses IoT sensors and ML to predict maintenance needs and prevent aircraft failures.",
    challenge: "Processing large volumes of sensor data while providing accurate maintenance predictions and real-time monitoring.",
    solution: "Developed a scalable architecture using edge computing and advanced analytics for efficient data processing.",
    features: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Component life prediction",
      "Maintenance scheduling",
      "Performance analytics"
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Azure IoT",
      "Power BI",
      "MongoDB",
      "Docker"
    ],
    results: "Reduced unscheduled maintenance by 40% and improved aircraft availability by 25%."
  }
];