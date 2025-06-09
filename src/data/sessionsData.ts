export interface TopicItem {
  title: string;
  items?: string[];
  description?: string;
}

export interface TakeawayItem {
  title: string;
  description: string;
}

export interface Session {
  id: string;
  date: string;
  title: string;
  instructor: string;
  summary: string;
  overview: string;
  keyTopics: TopicItem[];
  keyTakeaways: TakeawayItem[];
  images?: string[]; // Add this field to store image URLs
}

export const sessionsData: Session[] = [
  {
    id: "session-1",
    date: "1-Feb-25",
    title: "Introduction to IT Industry and Career Paths",
    instructor: "Ms. Vishaliney Pirathap, Lecturer at Northern Uni",
    summary: "An introduction to the IT industry and various career paths available within it.",
    overview: "In this session, we received an introduction to the IT industry and various career paths available within it. The lecture provided a solid foundation for understanding the roles and skills needed to succeed in this fast-paced field.",
    keyTopics: [
      {
        title: "IT/Computing Related Careers",
        items: [
          "Introduction to various career paths in the IT industry, including software development, network engineering, cybersecurity, and data science.",
          "Understanding how to align personal skills and interests with specific IT roles."
        ]
      },
      {
        title: "Employability Skills Development",
        description: "The importance of developing a wide range of skills, from technical abilities to communication and teamwork, to succeed in the industry."
      },
      {
        title: "UI/UX Engineering",
        description: "Insights into user experience design and the critical role it plays in building successful software products."
      },
      {
        title: "Data Science Career Paths",
        description: "An overview of the data-driven careers in IT, including data analysis, machine learning, and artificial intelligence."
      },
      {
        title: "Achieving Your Dreams",
        description: "Motivation to set long-term goals and work consistently toward achieving them."
      },
      {
        title: "Employment Attributes",
        description: "Understanding the key attributes employers look for, like adaptability, problem-solving, and a proactive mindset."
      },
      {
        title: "Entrepreneurship",
        description: "Exploring the potential for innovation and starting your own tech business."
      },
      {
        title: "Business Law",
        description: "A brief introduction to the legal aspects of running a tech business."
      },
      {
        title: "Networking like a PRO",
        description: "Tips on building a professional network to enhance career growth."
      }
    ],
    keyTakeaways: [
      {
        title: "Job Fit vs. Organization Fit",
        description: "Job fit involves having the right skills for a particular role, while organizational fit focuses on aligning personal values and behaviors with the company culture."
      },
      {
        title: "Employee Performance",
        description: "Success in any job is measured by the quality, quantity, and efficiency of work, not just by clocking in and out."
      },
      {
        title: "Drive and Invention",
        description: "Personal motivation and a desire to innovate are crucial for long-term success in the tech industry."
      }
    ]
  },
  {
    id: "session-2",
    date: "8-Feb-25",
    title: "Networking and Organization Perspectives",
    instructor: "Ms. Suba Francis",
    summary: "This session focused on the importance of networking and understanding organizational perspectives.",
    overview: "This session focused on the importance of networking and understanding organizational perspectives, emphasizing the role of soft skills in building strong professional relationships.",
    images: [
      "/uploads/92197993-6277-4c68-9f25-64138b043a93.png",
      "/uploads/d4b2d77b-908a-4ff8-8997-65f2bf772e37.png"
    ],
    keyTopics: [
      {
        title: "Soft Skills for Professional Growth",
        items: [
          "The importance of effective communication, emotional intelligence, and adaptability in the workplace.",
          "Building trust and maintaining a positive attitude in professional interactions."
        ]
      },
      {
        title: "How to Move with Others",
        items: [
          "Developing interpersonal skills to work effectively in teams.",
          "Understanding different communication styles and adapting to diverse workplace cultures."
        ]
      },
      {
        title: "Greeting and Professional Etiquette",
        items: [
          "The impact of first impressions and how to make a positive one.",
          "Tips for professional greetings, including firm handshakes, eye contact, and confident body language."
        ]
      },
      {
        title: "Key Soft Skills to Develop",
        items: [
          "Active Listening – Paying attention to others without interrupting.",
          "Empathy – Understanding and respecting others' perspectives.",
          "Conflict Resolution – Managing disagreements professionally.",
          "Problem-Solving – Finding solutions in challenging situations.",
          "Networking – Building meaningful professional connections."
        ]
      }
    ],
    keyTakeaways: [
      {
        title: "Soft Skills are Essential",
        description: "While technical skills are important, soft skills are often the key to career advancement and professional success."
      },
      {
        title: "The Power of a Positive Attitude",
        description: "Maintaining a positive attitude can improve team dynamics and boost overall productivity."
      },
      {
        title: "Networking as a Career Asset",
        description: "Building strong professional networks can open doors to new opportunities and career growth."
      }
    ]
  },
  {
    id: "session-3",
    date: "22-Feb-25",
    title: "Industry Expectations – Technical Aspect",
    instructor: "Mr. Miller Alexander Rajendran, CEO of SenzAgro Solutions",
    summary: "Insights into the technical aspects of the IT industry and project management.",
    overview: "This session provided insights into the technical aspects of the IT industry, including the technologies commonly used for web hosting and the process of managing successful projects.",
    images: [
      "/uploads/40b96ce5-0522-4754-b3ca-8b78c649ddb5.jpeg"
    ],
    keyTopics: [
      {
        title: "Understanding Industry Technologies",
        items: [
          "Overview of the latest technologies and tools used in the industry, including cloud computing, containerization, and DevOps.",
          "Popular platforms for web hosting, such as AWS (Amazon Web Services), Microsoft Azure, Google Cloud Platform (GCP), and Heroku.",
          "Importance of scalability, security, and performance in web hosting."
        ]
      },
      {
        title: "Web Hosting Fundamentals",
        items: [
          "Choosing the right hosting solution based on project requirements.",
          "Understanding Domain Names, DNS (Domain Name System), and SSL Certificates.",
          "Server management, database integration, and application deployment."
        ]
      },
      {
        title: "Project Development Process",
        description: "Key stages in project development including requirement analysis, planning and design, development, testing and debugging, and deployment and maintenance."
      },
      {
        title: "Agile and DevOps",
        description: "The importance of Agile methodologies for fast and flexible project management, continuous integration, continuous deployment (CI/CD), and version control using Git."
      }
    ],
    keyTakeaways: [
      {
        title: "Stay Updated on Industry Trends",
        description: "The technology landscape is constantly evolving, making it essential to stay updated with the latest tools and frameworks."
      },
      {
        title: "Importance of Planning and Collaboration",
        description: "Effective project management relies on clear communication, teamwork, and proactive planning."
      },
      {
        title: "Focus on Security and Performance",
        description: "Ensuring data security and high performance is critical for successful web projects."
      }
    ]
  },
  {
    id: "session-4",
    date: "15-Feb-25",
    title: "Industry Attitudes and HR Aspect",
    instructor: "Mr. Mahinthan Subenthiran, Group Manager – Human Resources",
    summary: "Exploring the critical role of Human Resources in organizations.",
    overview: "This session focused on the critical role of Human Resources (HR) within organizations, exploring the responsibilities of HR professionals and their expectations from employees.",
    images: [
      "/uploads/79b762d1-90b1-454f-a7fa-9c3959ed41d5.png",
      "/uploads/22f6a42e-a8cd-42c3-9e41-55440c7cac5a.png"
    ],
    keyTopics: [
      {
        title: "What is HR and Its Role in a Company",
        items: [
          "HR (Human Resources) is a core function that focuses on managing a company's most valuable asset – its people.",
          "It involves People Management, HR Management (HRM), HR Development (HRD), and People & Culture.",
          "HR is not just a job but a practice that covers the entire employee lifecycle, from recruitment to retirement."
        ]
      },
      {
        title: "Core HR Functions",
        items: [
          "Recruitment and Talent Acquisition: Finding and hiring the right talent.",
          "Onboarding and Orientation: Welcoming new employees and integrating them into the organization.",
          "Employee Relations and Engagement: Maintaining a positive work environment.",
          "Learning and Development: Providing training and career growth opportunities.",
          "Performance Management: Evaluating employee performance and setting goals.",
          "Compensation and Benefits: Managing salaries, bonuses, and perks.",
          "HR Compliance and Legal Responsibilities: Ensuring the company follows labor laws and regulations.",
          "Cultural Building: Creating a strong organizational culture.",
          "Workforce Planning and HR Analytics: Using data to optimize human resource management."
        ]
      },
      {
        title: "HR's Role in Interviews",
        description: "HR evaluates both technical and soft skills to ensure a cultural fit. They assess long-term growth potential, not just technical competence. Important factors include professional attitude, enthusiasm, and communication skills."
      },
      {
        title: "HR Expectations from Employees",
        items: [
          "Technical Skills and Industry Knowledge – Mastery of the relevant technologies and tools.",
          "Adaptability and Learning Agility – Ability to learn new skills quickly.",
          "Critical Thinking and Problem-Solving – Finding effective solutions in complex situations.",
          "Professionalism and Work Ethic – Being disciplined, punctual, and reliable.",
          "Collaboration and Teamwork – Working effectively with others.",
          "Leadership and Initiative – Taking charge and leading teams."
        ]
      }
    ],
    keyTakeaways: [
      {
        title: "HR is a Strategic Partner",
        description: "HR is not just about hiring and firing but plays a strategic role in aligning employees with organizational goals."
      },
      {
        title: "Soft Skills Matter",
        description: "HR professionals value interpersonal skills, cultural fit, and professional attitude as much as technical abilities."
      },
      {
        title: "Growth and Development",
        description: "Career progression depends not just on technical skills but also on continuous learning, leadership, and adaptability."
      }
    ]
  },
  {
    id: "session-5",
    date: "8-Mar-25",
    title: "Job Role – UI/UX Engineering",
    instructor: "Mr. Gobinthiran Kulendran, CEO & Founder at Huex",
    summary: "Introduction to the field of UI/UX design and career opportunities.",
    overview: "This session provided an introduction to the field of UI/UX design, exploring career opportunities, essential skills, and industry trends. It highlighted the importance of user-centered design and the critical role UI/UX professionals play in the success of digital products.",
     images: [
      "public/uploads/session5.jpeg",
      "public/uploads/session05.jpeg"
    ],
    keyTopics: [
      {
        title: "What is UI/UX Design?",
        items: [
          "User Interface (UI): Focuses on the visual elements of a product, including layout, color schemes, typography, and interactive components.",
          "User Experience (UX): Involves enhancing user satisfaction by improving usability, accessibility, and overall interaction with the product."
        ]
      },
      {
        title: "Why UI/UX is Important",
        items: [
          "Business Impact: Good design directly influences user retention, customer satisfaction, and revenue growth.",
          "User-Centered Approach: Prioritizing the needs and expectations of users leads to more successful digital products.",
          "Competitive Edge: High-quality design sets companies apart in crowded markets."
        ]
      },
      {
        title: "UI/UX Design Processes",
        description: "Design Thinking Process – The most common approach, focused on empathy, problem definition, ideation, prototyping, and testing. Other popular processes include the Double Diamond Process, Lean UX Process, and Google's Design Sprint."
      },
      {
        title: "Tools Used in UI/UX Design",
        items: [
          "Design and Prototyping: Figma, Adobe XD, Sketch",
          "Wireframing: Balsamiq, Axure, InVision",
          "User Research and Testing: Hotjar, UsabilityHub, Maze",
          "Collaboration: Miro, Zeplin, Slack"
        ]
      }
    ],
    keyTakeaways: [
      {
        title: "Focus on User-Centric Design",
        description: "Understand the user's needs, motivations, and pain points to create meaningful experiences."
      },
      {
        title: "Build a Strong Portfolio",
        description: "Showcase 3-5 solid projects with detailed process breakdowns on platforms like Behance, Dribbble, or personal websites."
      },
      {
        title: "Stay Updated on Industry Trends",
        description: "UI/UX is a rapidly changing field, making continuous learning essential."
      }
    ]
  },
  {
    id: "session-6",
    date: "22-Mar-25",
    title: "Skills for Career Path Selection",
    instructor: "Mr. Gajarthan Thevarajah, Co-Founder & CEO of Bohar Solutions (Pvt) Ltd.",
    summary: "Essential skills required for choosing a successful career path.",
    overview: "This session focused on the essential skills required for choosing a successful career path, highlighting the importance of practical experience, personal branding, and continuous learning. It provided insights into moving from academic learning to real-world impact.",
     images: [
      "public/uploads/session6.jpeg",
      "public/uploads/session06.jpeg"
    ],
    keyTopics: [
      {
        title: "From Learning to Doing",
        items: [
          "Growth happens when you transition from just 'learning' to actually 'doing.'",
          "Focus on building real projects rather than just consuming tutorials.",
          "Tip: You don't need to learn everything – start building with what you know."
        ]
      },
      {
        title: "The Wake-Up Call",
        description: "Many successful developers start early, building projects, freelancing, and sharing their work online. It's never too late to start, but it's risky to wait."
      },
      {
        title: "Building Real Skills",
        items: [
          "Technical Skills: Git & GitHub, HTML, CSS, JavaScript, React, UI/UX with Figma",
          "Soft Skills: Problem-Solving, Communication, Consistency, Curiosity"
        ]
      },
      {
        title: "Projects > GPA",
        description: "Employers often care more about what you've built than your grades. Important questions include: What have you built? Can I see your GitHub? Can you walk me through your projects?"
      }
    ],
    keyTakeaways: [
      {
        title: "Start Small, Start Now",
        description: "Don't wait to become an expert before starting – you'll learn along the way."
      },
      {
        title: "Your 2nd Year is Your Secret Advantage",
        description: "Use this time to explore, fail, and grow."
      },
      {
        title: "Projects Build Momentum",
        description: "Each project adds to your skills and confidence."
      }
    ]
  },
  {
    id: "session-7",
    date: "27-Mar-25",
    title: "Manage Stress and Work-Life Balance",
    instructor: "Dr. N. Manikandan, M.E., Ph.D., Assistant Professor",
    summary: "Understanding stress management techniques and work-life balance.",
    overview: "This session focused on understanding the sources of stress, effective stress management techniques, and the importance of balancing work and personal life for long-term well-being and career success.",
     images: [
      "public/uploads/session7.jpeg"
    ],
    keyTopics: [
      {
        title: "Understanding Stress",
        items: [
          "What is Stress? A physical, mental, or emotional response to challenging situations. Not always negative – some stress can motivate us to achieve our goals.",
          "Types of Stress: Acute Stress (short-term), Chronic Stress (long-term), Episodic Acute Stress (frequent, high-pressure situations)."
        ]
      },
      {
        title: "Common Sources of Stress",
        items: [
          "Workload and deadlines.",
          "Financial pressures.",
          "Relationship issues.",
          "Academic performance.",
          "Career uncertainty."
        ]
      },
      {
        title: "Impact of Stress",
        items: [
          "Physical: Fatigue, headaches, muscle tension.",
          "Emotional: Anxiety, irritability, depression.",
          "Cognitive: Lack of focus, negative thinking, poor decision-making.",
          "Behavioral: Overeating, withdrawal, reduced productivity."
        ]
      },
      {
        title: "Effective Stress Management Techniques",
        items: [
          "Time Management: Prioritize tasks, avoid multitasking, and break work into manageable chunks.",
          "Physical Exercise: Regular exercise reduces stress hormones and boosts mood.",
          "Mindfulness and Relaxation: Practices like meditation, deep breathing, and yoga.",
          "Healthy Lifestyle: Balanced diet, proper sleep, and staying hydrated.",
          "Positive Self-Talk: Replace negative thoughts with positive affirmations."
        ]
      }
    ],
    keyTakeaways: [
      {
        title: "Balance is Key",
        description: "A healthy work-life balance is essential for long-term productivity and happiness."
      },
      {
        title: "Stress is Manageable",
        description: "With the right strategies, you can control stress and prevent burnout."
      },
      {
        title: "Take Care of Your Mental Health",
        description: "Your mental well-being is as important as your physical health."
      }
    ]
  },
  {
    id: "session-8",
    date: "6-May-25",
    title: "Business Law / Company Law",
    instructor: "Vaishnavy Shanmuganathan, Attorney-at-Law",
    summary: "Understanding the fundamentals of business and company laws.",
    overview: "This session covered the fundamental differences between business law and company law, the legal steps to start a company, and the essential rights and responsibilities of employers, employees, and companies.",
     images: [
      "public/uploads/session8.jpeg",
      "public/uploads/session08.jpeg"
    ],
    keyTopics: [
      {
        title: "Understanding Business Law vs. Company Law",
        items: [
          "Business Law: Governs all aspects of business operations, including contracts, sales, property, and intellectual property. Applies to all types of businesses.",
          "Company Law (Corporate Law): Focuses specifically on the formation, management, and governance of companies. Deals with shareholder rights, corporate structure, mergers, and dissolutions."
        ]
      },
      {
        title: "Starting a Company",
        items: [
          "Choosing a Business Structure: Sole Proprietorship, Partnership, Private Limited Company, Public Limited Company, Limited Liability Company, Non-Profit Organization",
          "Legal Steps: Choosing a company name, registering with authorities, drafting documents, obtaining licenses, setting up accounts, and complying with regulations."
        ]
      },
      {
        title: "Key Legal Documents in a Company",
        items: [
          "Memorandum of Association (MOA): Defines the company's objectives and powers.",
          "Articles of Association (AOA): Outlines the internal rules and regulations for company management.",
          "Shareholder Agreements: Sets out the rights and responsibilities of shareholders.",
          "Employment Contracts: Defines the relationship between the employer and employee."
        ]
      },
      {
        title: "Employee, Employer, and Company Rights and Responsibilities",
        description: "Overview of the legal responsibilities and rights of different stakeholders in a business context."
      }
    ],
    keyTakeaways: [
      {
        title: "Choose the Right Business Structure",
        description: "It impacts your legal obligations, tax responsibilities, and personal liability."
      },
      {
        title: "Understand Your Legal Rights",
        description: "Both employers and employees have clearly defined rights and responsibilities."
      },
      {
        title: "Stay Compliant",
        description: "Regularly update company documents and ensure compliance with changing laws."
      }
    ]
  },
  {
    id: "session-9",
    date: "19-Apr-25",
    title: "Job Roles in Non-IT Fields – Achieving Your Dream",
    instructor: "Ms. Sarmila Sivaraja, Google Women Techmakers Global Ambassador",
    summary: "Exploring non-IT career opportunities and communication skills.",
    overview: "This session explored the wide range of non-IT career opportunities, the importance of communication skills, and practical strategies to improve English speaking for career growth. It also discussed the benefits of coworking spaces for modern professionals.",
     images: [
      "public/uploads/session9.jpeg",
      "public/uploads/session09.jpeg"
    ],
    keyTopics: [
      {
        title: "Exploring Non-IT Career Paths",
        items: [
          "Creative Industries: Media, advertising, graphic design, content writing.",
          "Business and Finance: Marketing, sales, human resources, accounting.",
          "Healthcare and Life Sciences: Medical research, healthcare management, pharmaceuticals.",
          "Education and Training: Teaching, coaching, academic research.",
          "Entrepreneurship: Starting and managing your own business.",
          "Social Impact and NGOs: Community development, public health, non-profit leadership."
        ]
      },
      {
        title: "Importance of Communication Skills",
        description: "Why Communication Skills Matter: Build stronger relationships at work, present ideas clearly and confidently, improve teamwork and collaboration, make a positive impression during interviews."
      },
      {
        title: "Improving English Speaking Skills",
        items: [
          "Practice Regularly: Speak English daily, even in small conversations.",
          "Expand Your Vocabulary: Learn new words and phrases.",
          "Join English Clubs or Online Communities: Practice with peers.",
          "Use Language Apps: Duolingo, Grammarly, or HelloTalk for daily practice.",
          "Watch English Content: Movies, podcasts, TED talks to improve pronunciation and accent."
        ]
      },
      {
        title: "The Role of Coworking Spaces",
        description: "What is a Coworking Space? Shared office environments where individuals and companies work independently or collaboratively. Benefits include networking opportunities, flexible workspaces, cost-effectiveness, and improved work-life balance."
      }
    ],
    keyTakeaways: [
      {
        title: "Communication is Key",
        description: "Strong communication skills can set you apart in any career."
      },
      {
        title: "Practice Makes Perfect",
        description: "Consistent practice is the best way to improve your English speaking ability."
      },
      {
        title: "Think Beyond IT",
        description: "Non-IT fields offer diverse and rewarding career options."
      },
      {
        title: "Coworking is the Future",
        description: "Flexible workspaces can boost productivity and networking."
      }
    ]
  },
  {
    id: "session-10",
    date: "6-Jun-25",
    title: "Industrial Visit – Unicom SD",
    instructor: "Field Visit Experience",
    summary: "A comprehensive field visit to Unicom Software Development, exploring real-world software development practices and industry exposure.",
    overview: "This industrial visit to Unicom SD provided students with valuable exposure to real-world software development practices. Unicom SD is a growing tech company that provides innovative digital solutions, especially for public service organizations, focusing on developing practical and impactful software used by government clients and event organizations.",
    images: [
      "/uploads/ind1.jpeg",
      "/uploads/ind2.jpeg",
      "/uploads/ind3.jpeg",
      "/uploads/ind4.jpeg",
      "/uploads/ind5.jpeg"
    ],
    keyTopics: [
      {
        title: "About Unicom SD",
        description: "Unicom SD is a growing tech company that provides innovative digital solutions, especially for public service organizations. They focus on developing practical and impactful software used by government clients and event organizations."
      },
      {
        title: "Key Projects at Unicom SD",
        items: [
          "Optimo – Ticket Booking System: Successfully used in the Paris Paralympics 2024, managing large-scale event ticketing smoothly.",
          "Bubblt Town: A white-label mobile platform built for city councils, helping them connect with communities through news, events, and notifications.",
          "Poddle: A customer engagement app that collects user data, shows personalized offers, and provides rewards via NFC (Near Field Communication) for a smooth and modern user experience."
        ]
      },
      {
        title: "Client Base and Impact",
        items: [
          "Inner West Council (Australia)",
          "Other local government and council partners",
          "International event organizations like the Paris Paralympics 2024"
        ]
      },
      {
        title: "Technologies Used at Unicom SD",
        items: [
          ".NET – for backend services and APIs",
          "Angular – for responsive web front-end",
          "Flutter – for cross-platform mobile apps",
          "Microsoft Azure – for cloud hosting and scalability"
        ]
      },
      {
        title: "Internship Opportunities and Requirements",
        items: [
          "Unicom SD offers internships to students with solid coding knowledge",
          "Preferred skills: Experience in OOP concepts, familiarity with .NET, Angular, or Flutter, basic project work or contributions on GitHub",
          "Emphasis on hands-on practice, building your own projects, and being able to explain your code clearly"
        ]
      },
      {
        title: "Employee Interactions and Insights",
        items: [
          "Spoke with software developers and project leads",
          "Gained insights into client communication and day-to-day team workflows",
          "Learned about managing live deployments and handling real-world challenges",
          "Received encouragement to practice clean coding, learn team collaboration, and stay updated with modern tools and frameworks"
        ]
      }
    ],
    keyTakeaways: [
      {
        title: "Mid-Size Companies Can Have Global Impact",
        description: "Unicom SD is a great example of how a mid-size company can work on international-level projects like the Paris Paralympics 2024."
      },
      {
        title: "Real Internship Opportunities Exist",
        description: "There are genuine internship opportunities available for students who are enthusiastic, prepared, and have solid technical foundations."
      },
      {
        title: "Industry Insight and Career Clarity",
        description: "The visit provided clear insight into career pathways, technical expectations, and team collaboration in the software industry, helping students understand what to expect in professional environments."
      }
    ]
  }
];
