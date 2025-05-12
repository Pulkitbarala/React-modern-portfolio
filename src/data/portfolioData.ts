
import { Education, Project, Skill, SocialLink } from "../types";

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Data Science",
    institution: "University of Data Analytics",
    duration: "2022 - 2024",
    description: "Specialized in machine learning, statistical analysis, and big data technologies. Worked on various real-world projects implementing data science solutions."
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "Tech University",
    duration: "2018 - 2022",
    description: "Completed coursework in algorithms, data structures, database management, and software engineering principles."
  },
  {
    id: 3,
    degree: "Data Science Bootcamp",
    institution: "Data Academy",
    duration: "Summer 2021",
    description: "Intensive 12-week program covering Python for data analysis, machine learning, and data visualization tools."
  }
];

export const skillsData: Skill[] = [
  // Technical Skills
  {
    id: 1,
    name: "Python",
    percentage: 90,
    category: "technical"
  },
  {
    id: 2,
    name: "R",
    percentage: 85,
    category: "technical"
  },
  {
    id: 3,
    name: "SQL",
    percentage: 80,
    category: "technical"
  },
  {
    id: 4,
    name: "Machine Learning",
    percentage: 85,
    category: "technical"
  },
  {
    id: 5,
    name: "Deep Learning",
    percentage: 75,
    category: "technical"
  },
  {
    id: 6,
    name: "Statistical Analysis",
    percentage: 88,
    category: "technical"
  },
  
  // Tools & Technologies
  {
    id: 7,
    name: "TensorFlow",
    percentage: 78,
    category: "tools"
  },
  {
    id: 8,
    name: "PyTorch",
    percentage: 70,
    category: "tools"
  },
  {
    id: 9,
    name: "Pandas",
    percentage: 92,
    category: "tools"
  },
  {
    id: 10,
    name: "Scikit-Learn",
    percentage: 88,
    category: "tools"
  },
  {
    id: 11,
    name: "Power BI",
    percentage: 75,
    category: "tools"
  },
  {
    id: 12,
    name: "Tableau",
    percentage: 80,
    category: "tools"
  },
  
  // Soft Skills
  {
    id: 13,
    name: "Problem Solving",
    percentage: 95,
    category: "soft"
  },
  {
    id: 14,
    name: "Communication",
    percentage: 85,
    category: "soft"
  },
  {
    id: 15,
    name: "Teamwork",
    percentage: 90,
    category: "soft"
  },
  {
    id: 16,
    name: "Time Management",
    percentage: 87,
    category: "soft"
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Customer Segmentation Analysis",
    description: "Implemented K-means clustering to segment customers based on purchasing behavior, helping a retail client optimize their marketing strategy.",
    image: "/placeholder.svg",
    tags: ["Python", "Scikit-Learn", "Pandas", "Data Visualization"],
    demoLink: "https://example.com/demo1",
    codeLink: "https://github.com/yourusername/customer-segmentation"
  },
  {
    id: 2,
    title: "Sentiment Analysis Dashboard",
    description: "Created an interactive dashboard for real-time sentiment analysis of customer reviews using NLP techniques.",
    image: "/placeholder.svg",
    tags: ["NLP", "Python", "Flask", "ReactJS", "NLTK"],
    demoLink: "https://example.com/demo2",
    codeLink: "https://github.com/yourusername/sentiment-dashboard"
  },
  {
    id: 3,
    title: "Predictive Maintenance System",
    description: "Developed a machine learning model to predict equipment failures before they occur, reducing downtime by 35%.",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "Time Series", "IoT"],
    demoLink: "https://example.com/demo3",
    codeLink: "https://github.com/yourusername/predictive-maintenance"
  },
  {
    id: 4,
    title: "Sales Forecasting Model",
    description: "Built a time series forecasting model that predicts future sales with 92% accuracy, helping businesses with inventory management.",
    image: "/placeholder.svg",
    tags: ["R", "Time Series", "ARIMA", "Data Analysis"],
    demoLink: "https://example.com/demo4",
    codeLink: "https://github.com/yourusername/sales-forecast"
  },
  {
    id: 5,
    title: "Healthcare Analytics Platform",
    description: "Created a comprehensive analytics platform for healthcare providers to track patient outcomes and optimize resource allocation.",
    image: "/placeholder.svg",
    tags: ["Python", "Dash", "Pandas", "Healthcare"],
    demoLink: "https://example.com/demo5",
    codeLink: "https://github.com/yourusername/healthcare-analytics"
  },
  {
    id: 6,
    title: "Image Recognition System",
    description: "Implemented a CNN-based image recognition system for automated quality control in a manufacturing process.",
    image: "/placeholder.svg",
    tags: ["Python", "CNN", "Computer Vision", "PyTorch"],
    demoLink: "https://example.com/demo6",
    codeLink: "https://github.com/yourusername/image-recognition"
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github"
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin"
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter"
  },
  {
    id: 4,
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "mail"
  }
];
