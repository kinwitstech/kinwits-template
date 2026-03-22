export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  status: 'Open' | 'Closed';
  experience?: string;
  startDate?: string;
  applyEmail: string;
  aboutRole?: string;
  responsibilities?: string[];
  requiredSkills?: { label: string; detail: string }[];
  niceToHave?: string[];
  whoYouAre?: string[];
  closingNote?: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'full-stack-engineer',
    title: 'Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote / Udupi, Karnataka',
    type: 'Full-time (Min 2 years)',
    description: 'Help us build scalable web platforms and AI-powered products from the ground up.',
    status: 'Open',
    experience: 'Minimum 2 years (Full-time)',
    startDate: 'Immediate',
    applyEmail: 'info@kinwits.com',
    aboutRole:
      "We're looking for a Full-Stack Engineer with strong backend expertise to help us build scalable web platforms and AI-powered products from the ground up. You'll be responsible for writing clean, efficient, and maintainable code, collaborating with our product team to translate ideas into reliable, high-quality solutions.\n\nAs a small, fast-paced team, we value initiative, accountability, and a genuine passion for building great products. You'll have room to experiment, learn, and directly shape the solutions we deliver.",
    responsibilities: [
      'Build RESTful/GraphQL APIs, integrate with third-party services, and ensure robustness and security.',
      'Contribute to AI-driven features, automation workflows, and prompt-based systems.',
      'Write clean, testable, and maintainable code following best practice.',
      'Participate in code reviews and provide constructive feedback.',
      'Collaborate with product and design teams to translate requirements into robust technical solutions.',
      'Troubleshoot, debug, and optimize application performance.',
      'Stay up to date with modern development tools, frameworks, and trends.',
    ],
    requiredSkills: [
      { label: 'Experience', detail: 'Minimum 2 years of hands-on software development experience.' },
      { label: 'Frontend & Backend', detail: 'React, JavaScript, TypeScript, HTML, CSS, Python, Java (Spring Boot preferred).' },
      { label: 'Databases', detail: 'Relational & NoSQL databases.' },
      { label: 'Testing', detail: 'Solid understanding of unit testing frameworks (e.g., Jest, JUnit).' },
      { label: 'Tools & Platforms', detail: 'VS Code, Eclipse, or IntelliJ; Git.' },
      { label: 'Core Fundamentals', detail: 'Strong understanding of data structures, algorithms, and problem-solving fundamentals.' },
      { label: 'Understanding Of', detail: 'MVC architecture, operating systems, and networking.' },
    ],
    niceToHave: [
      'Experience with AI frameworks such as LangChain, LangGraph, or similar tools.',
      'Exposure to AWS, CI/CD pipelines, and Agile methodologies.',
      'Previous experience in building and deploying production-level applications.',
    ],
    whoYouAre: [
      'Highly motivated, analytical, and detail oriented.',
      'Comfortable taking ownership of tasks and delivering with minimal supervision.',
      'Strong sense of accountability and commitment to timelines.',
      'Enthusiastic about continuous learning and applying new technologies.',
    ],
    closingNote:
      "If you're passionate about building impactful software, thrive in a fast-paced environment, and want to be part of a growing team shaping digital transformation, we'd love to hear from you.",
  },
  {
    id: 'software-developer-intern',
    title: 'Software Developer Intern',
    department: 'Engineering',
    location: 'Udupi',
    type: 'Internship (3-6 months)',
    description: 'Assist in developing web/mobile applications and AI-driven solutions. Opportunity for full-time conversion.',
    status: 'Closed',
    experience: '3 to 6 months (Full-time)',
    applyEmail: 'info@kinwits.com',
    aboutRole: 'Opportunity for full-time conversion based on performance.',
    responsibilities: [
      'Assist in developing and maintaining web and mobile applications.',
      'Help in building software and AI driven solutions for various digital platforms.',
      'Work on user experience improvements.',
      'Collaborate with the team to solve technical challenges and optimize performance.',
      'Learn and implement best practices in software engineering.',
    ],
    requiredSkills: [
      { label: 'Frontend & Backend', detail: 'React, JavaScript, TypeScript, Java, HTML, CSS.' },
      { label: 'Databases', detail: 'Experience with either relational or non-relational databases.' },
      { label: 'Tools & Platforms', detail: 'VS Code, Eclipse, or IntelliJ; Git.' },
      { label: 'Testing', detail: 'Basic knowledge of unit testing frameworks (e.g., Jest, JUnit).' },
      { label: 'Core CS Concepts', detail: 'Strong knowledge of algorithms & data structures.' },
      { label: 'Basic Understanding Of', detail: 'MVC architecture, operating systems, and networking.' },
    ],
    niceToHave: [
      'AWS, CI/CD, and Agile methodologies.',
    ],
  },
  {
    id: 'senior-software-developer',
    title: 'Senior Software Developer',
    department: 'Engineering',
    location: 'Udupi',
    type: 'Full-time (2-3 years)',
    description: 'Lead and build real-world software & AI-driven platforms with a fast-growing team.',
    status: 'Closed',
    experience: '2 to 3 years (Full-time)',
    applyEmail: 'info@kinwits.com',
    aboutRole: 'Lead and build real-world software & AI-driven platforms with a fast-growing team.',
    responsibilities: [
      'Design, develop, and maintain scalable web and mobile applications.',
      'Build software and AI-driven solutions for diverse digital platforms.',
      'Drive user experience improvements and frontend performance.',
      'Collaborate with cross-functional teams to solve complex technical challenges.',
      'Mentor junior developers and interns to elevate overall team performance.',
      'Implement best practices in coding, testing, deployment, and software architecture.',
    ],
    requiredSkills: [
      { label: 'Frontend & Backend', detail: 'React, JavaScript, TypeScript, Java, HTML, CSS.' },
      { label: 'Databases', detail: 'Experience with both relational and non-relational databases.' },
      { label: 'Tools & Platforms', detail: 'VS Code, Eclipse, or IntelliJ; Git.' },
      { label: 'Testing', detail: 'Solid understanding of unit testing frameworks (e.g., Jest, JUnit).' },
      { label: 'Core CS Concepts', detail: 'Strong knowledge of algorithms, data structures, and system design.' },
      { label: 'Understanding Of', detail: 'MVC architecture, operating systems, and networking.' },
    ],
    niceToHave: [
      'AWS, CI/CD, Agile methodologies, and AI/ML exposure.',
    ],
  },
];
