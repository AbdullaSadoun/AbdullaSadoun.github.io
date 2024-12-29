# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Description and Main Prompt:

# Description and main prompt: 

Create a modern React.js portfolio website with a sleek, Apple-inspired dark theme that showcases your professional journey. The website should include:

Hero Section:

Implement a bold, minimalist hero section with a striking headline and subtle animations
Use dynamic typography with font sizes responsive to viewport
Include a brief, impactful tagline that captures your unique value proposition
Experience & Skills Section:

Design an interactive timeline or carousel displaying your professional journey
Create hoverable skill cards with progress indicators
Implement smooth micro-interactions and transitions
Group skills by category (Frontend, Backend, Tools, etc.)
Projects Portfolio:

Display projects in a grid layout with hover effects
Include project thumbnails with consistent aspect ratios
Add subtle parallax scrolling effects
Implement modal windows for detailed project information
Include live demo links and GitHub repositories
Education & Certificates:

Create an elegant timeline or accordion layout
Add logos of institutions/certification providers
Include downloadable certificate PDFs
Implement subtle fade-in animations on scroll
Services Section:

Design modern, minimalist service cards
Include iconography that matches the overall theme
Add hover states with additional information
Ensure clear service descriptions and benefits
Contact Section:

Create a prominent CTA button that follows Apple's design principles
Include a floating contact button in the navigation
Design a clean, modern contact form
Add social media links with hover animations
Technical Requirements:

Use React.js with modern hooks and best practices
Implement responsive design for all screen sizes
Ensure accessibility standards are met
Optimize performance with lazy loading
Use smooth scrolling between sections
Include dark mode with subtle gradient overlays
Maintain consistent spacing and typography throughout
Color Palette:

Primary: Deep space black (#0A0A0A)
Secondary: Space gray (#2D2D2D)
Accent: Electric blue (#007AFF)
Text: Off-white (#F5F5F7)
Highlights: Subtle gradients with opacity

# brand colors:
#051d40 blue 
#e6e6e6 light gray 


## How to Run the Project:
1. Clone the repository to your local machine.
2. Navigate to the project directory (portfolio), make sure npm/node is installed. '''sudo apt install npm''' or '''brew install node'''
3. Run `npm install` to install the dependencies.
4. Start the development server with `npm run dev`.
5. Open your browser and go to `http://localhost:3000` to view the application.

## Today's Updates:
- Edited the Hero section to include a particle background and gradient overlay for better text visibility.
- Implemented animations using Framer Motion for the Hero section text.
- Updated the layout and styles for various sections to enhance the overall design.

## Plans for Tomorrow:
- Edit the text content of all sections to ensure clarity and impact.

## Projects:
### Lockheed Martin's AI Project:
{ // milton ai project
    id: 2,
    slug: "lm-milton",
    title: "Lockheed Martin's AI",
    description: "An AI model and interface to aid in analyzing the clients training needs.",
    images: [
      {
        id: 1,
        url: "projects/project2/milton-dashboard.png", 
        alt: "LM AI Dashboard",
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
### CPU EMULATOR -XM23P
{
    id: 3,
    slug: "cpu-emulator-xm23p",
    title: "CPU Emulator - XM23P",
    description: "A CPU emulator for the XM23P processor.",
    images: [],
    tags: ["CPU", "Emulator", "XM23P"],
    demoLink: "",
    githubLink: "",
    overview: "",
    challenge: "",
    solution: "",
    features: [],
    technologies: [],
    results: "" 
}

### SELF NAVIGATING ROBOT - LEAD
{
    id: 4,
    slug: "self-navigating-robot-lead",
    title: "Self Navigating Robot - LEAD",
    description: "A self navigating robot for the LEAD project.",
    images: [],
    tags: ["Robot", "Self Navigating", "LEAD"],
    demoLink: "",
    githubLink: "",
    overview: "",
    challenge: "",
    solution: "",
    features: [],
    technologies: [],
    results: "" 
}

### FLIGHT DELAY ANALYSIS
{
    id: 5,
    slug: "flight-delay-analysis",
    title: "Flight Delay Analysis",
    description: "An analysis of flight delays.",
    images: [],
    tags: ["Flight", "Delay", "Analysis"],
    demoLink: "",
    githubLink: "",
    overview: "",
    challenge: "",
    solution: "",
    features: [],
    technologies: [],
    results: "" 
}

### Autonomous Self Driving Vehicle Simulation
{
    id: 6,
    slug: "autonomous-self-driving-vehicle-simulation",
    title: "Autonomous Self Driving Vehicle Simulation",
    description: "A simulation of an autonomous self driving vehicle.",
    images: [],
    tags: ["Autonomous", "Self Driving", "Vehicle", "Simulation"],
    demoLink: "",
    githubLink: "",
    overview: "",
    challenge: "",
    solution: "",
    features: [],
    technologies: [],
    results: "" 
}

### Underwater Monitoring Real Time Data Analysis
{
    id: 7,
    slug: "underwater-monitoring-real-time-data-analysis",
    title: "Underwater Monitoring Real Time Data Analysis",
    description: "An analysis of underwater monitoring data.",
    images: [],
    tags: ["Underwater", "Monitoring", "Real Time", "Data", "Analysis"],
    demoLink: "",
    githubLink: "",
    overview: "",
    challenge: "",
    solution: "",
    features: [],
    technologies: [],
    results: "" 
}

### Cyber Security Attacks Analysis Project
{
    id: 8,
    slug: "cyber-security-attacks-analysis-project",
    title: "Cyber Security Attacks Analysis Project",
    description: "An analysis of cyber security attacks.",
    images: [],
    tags: ["Cyber Security", "Attacks", "Analysis"],
    demoLink: "",
    githubLink: "",
    overview: "",
    challenge: "",
    solution: "",
    features: [],
    technologies: [],
    results: "" 
}

### Aircraft Health Monitoring and Predictive Maintenance
{
    id: 9,
    slug: "aircraft-health-monitoring-and-predictive-maintenance",
    title: "Aircraft Health Monitoring and Predictive Maintenance",
    description: "A monitoring and predictive maintenance system for aircraft.",
    images: [],
    tags: ["Aircraft", "Health", "Monitoring", "Predictive", "Maintenance"],
    demoLink: "",
    githubLink: "",
    overview: "",
    challenge: "",
    solution: "",
    features: [],
    technologies: [],
    results: "" 
} 
