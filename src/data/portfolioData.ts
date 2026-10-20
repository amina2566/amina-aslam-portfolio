
export const portfolioData = {
  name: "Amina",

  title: "Software Developer",

  tagline: "Building practical software solutions for real-world problems.",

  shortIntro:
    "Software Engineer specializing in designing, developing, and maintaining robust software solutions using C#, VB.NET, .NET, ASP.NET Core, and SQL Server. Experienced in building Windows desktop applications, RESTful APIs, database-driven systems, and modern web interfaces.",

  email: "aminaofficial2566@gmail.com",

  location: "Pakistan",

  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },

  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "30+", label: "Projects" },
    { value: "15+", label: "Technologies" },
    { value: "6+", label: "Major Systems" },
  ],

  skills: {
    backend: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "ASP.NET MVC",
      "Web API",
      "LINQ",
      "Entity Framework",
      "REST APIs",
    ],

    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],

    database: [
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Database Design",
      "Query Optimization",
    ],

    desktop: [
      "WinForms",
      "Telerik",
      "C1FlexGrid",
      "Crystal Reports",
      "RDLC",
    ],

    tools: [
      "Visual Studio",
      "VS Code",
      "Git",
      "GitHub",
      "SSMS",
    ],

    concepts: [
      "OOP",
      "SOLID",
      "MVC",
      "REST",
      "Layered Architecture",
      "Clean Code",
      "Database Development",
    ],
  },

  projects: [
    {
      id: 1,
      title: "Enterprise ERP Management System",
      category: "Business Software",
      description:
        "A modular business management system designed to manage core organizational operations through integrated database-driven modules.",
      technologies: [
        "C#",
        ".NET",
        "SQL Server",
        "WinForms",
        "Crystal Reports",
      ],
      features: [
        "Accounts Management",
        "Inventory Management",
        "HRMS",
        "Production",
        "Quality Control",
        "Hospital Management",
        "Reporting",
      ],
      images: [
        "/images/projects/enterprise-erp/Create New User.PNG",
        "/images/projects/enterprise-erp/Define City.PNG",
        "/images/projects/enterprise-erp/Voucher.PNG",
      ],
    },

    {
      id: 2,
      title: "Financial Management System",
      category: "Financial Software",
      description:
        "A database-driven financial management system for handling financial transactions, reporting, reconciliation and enterprise business workflows.",
      technologies: [
        "C#",
        ".NET",
        "SQL Server",
        "T-SQL",
        "Stored Procedures",
      ],
      features: [
        "Financial Transactions",
        "Account Management",
        "Trial Balance",
        "Financial Reports",
        "Data Validation",
        "Reconciliation",
      ],
      images: [
        "/images/projects/financial-management/dashboard.png",
        "/images/projects/financial-management/transactions.png",
        "/images/projects/financial-management/reports.png",
      ],
    },

    {
      id: 3,
      title: "Hospital Management System",
      category: "Healthcare Software",
      description:
        "A desktop-based hospital management system designed to manage patients, doctors, departments, laboratory tests and schedules.",
      technologies: [
        "C#",
        ".NET",
        "SQL Server",
        "WinForms",
        "Telerik",
      ],
      features: [
        "Patient Registration",
        "Doctor Management",
        "Departments",
        "Laboratory Tests",
        "Doctor Schedule",
        "Patient Records",
        "Reports",
      ],
      images: [
        "/images/projects/hospital-management/dashboard.png",
        "/images/projects/hospital-management/patients.png",
        "/images/projects/hospital-management/doctors.png",
      ],
    },

    {
      id: 4,
      title: "ATL Status Management System",
      category: "Data Processing",
      description:
        "A SQL Server based system for processing taxpayer records, maintaining ATL status history and updating customer records based on the latest tax status.",
      technologies: [
        "SQL Server",
        "T-SQL",
        "Stored Procedures",
        "Bulk Import",
      ],
      features: [
        "ATL Status Processing",
        "Status History",
        "Bulk Data Processing",
        "Duplicate Handling",
        "Data Validation",
        "Database Automation",
      ],
      images: [
        "/images/projects/atl-status/dashboard.png",
        "/images/projects/atl-status/status-records.png",
        "/images/projects/atl-status/reports.png",
      ],
    },

    {
      id: 5,
      title: "Advanced Face Recognition System",
      category: "Computer Vision",
      description:
        "A real-time face recognition application using computer vision and machine learning techniques for identity detection and matching.",
      technologies: [
        "C#",
        "OpenCvSharp",
        "EmguCV",
        "ONNX Runtime",
        "ArcFace",
        "SQL Server",
      ],
      features: [
        "Face Detection",
        "Face Registration",
        "Face Embeddings",
        "Similarity Matching",
        "Real-Time Recognition",
        "Database Integration",
      ],
      images: [
        "/images/projects/face-recognition/dashboard.png",
        "/images/projects/face-recognition/face-detection.png",
        "/images/projects/face-recognition/recognition.png",
      ],
    },

    {
      id: 6,
      title: "Real Estate Management System",
      category: "Business Software",
      description:
        "A centralized property management solution for organizing property records, client information, transactions, payments and real estate operations.",
      technologies: ["C#", ".NET", "SQL Server"],
      features: [
        "Property Record Management",
        "Client Management",
        "Property Transaction Tracking",
        "Payment and Installment Records",
        "Property Reports",
      ],
      images: [
        "/images/projects/real-estate/dashboard.png",
        "/images/projects/real-estate/properties.png",
        "/images/projects/real-estate/clients.png",
      ],
    },

    {
      id: 7,
      title: "FMS Fee Management System",
      category: "Financial Software",
      description:
        "A fee management solution for handling fee records, installment schedules, challan generation, payment tracking and financial reporting.",
      technologies: ["C#", ".NET", "SQL Server", "T-SQL"],
      features: [
        "Fee and Installment Management",
        "Fee Challan Generation",
        "Payment Tracking",
        "Fee Record Management",
        "Fee Reports and Summaries",
      ],
      images: [
        "/images/projects/fee-management/dashboard.png",
        "/images/projects/fee-management/student-fees.png",
        "/images/projects/fee-management/challan.png",
      ],
    },

    {
      id: 8,
      title: "Trading Software Solutions",
      category: "Financial Software",
      description:
        "Trading-focused software solutions for organizing transaction records, processing financial data and supporting accurate transaction monitoring and reporting.",
      technologies: ["C#", ".NET", "SQL Server"],
      features: [
        "Transaction Record Management",
        "Financial Data Processing",
        "Transaction Tracking",
        "Data Validation",
        "Reports and Data Analysis",
      ],
      images: [
        "/images/projects/trading/dashboard.png",
        "/images/projects/trading/transactions.png",
        "/images/projects/trading/reports.png",
      ],
    },

    {
      id: 9,
      title: "Inventory Management System",
      category: "Business Software",
      description:
        "An inventory management solution for tracking products, stock movements, purchases and inventory records while improving visibility across daily operations.",
      technologies: ["C#", ".NET", "WinForms", "SQL Server"],
      features: [
        "Product and Stock Management",
        "Purchase Records",
        "Stock Issuance and Receipts",
        "Stock Movement Tracking",
        "Inventory Reports",
      ],
      images: [
        "/images/projects/inventory/dashboard.png",
        "/images/projects/inventory/products.png",
        "/images/projects/inventory/stock-reports.png",
      ],
    },

    {
      id: 10,
      title: "Accounts Management System",
      category: "Financial Software",
      description:
        "An accounting solution for maintaining financial transactions, ledger accounts, vouchers, account balances and financial reports.",
      technologies: ["C#", ".NET", "SQL Server", "T-SQL"],
      features: [
        "Financial Voucher Management",
        "Ledger and Account Tracking",
        "Debit and Credit Records",
        "Account Balance Management",
        "Financial Statements and Reports",
      ],
      images: [
        "/images/projects/accounts/dashboard.png",
        "/images/projects/accounts/ledger.png",
        "/images/projects/accounts/vouchers.png",
      ],
    },

    {
      id: 11,
      title: "Human Resource Management System (HRMS)",
      category: "Business Software",
      description:
        "A human resource management solution for centralizing employee information and supporting day-to-day HR administration and workforce management.",
      technologies: ["C#", ".NET", "WinForms", "SQL Server"],
      features: [
        "Employee Record Management",
        "Attendance Tracking",
        "Leave Management",
        "HR Administration",
        "Employee Reports",
      ],
      images: [
        "/images/projects/hrms/dashboard.png",
        "/images/projects/hrms/employees.png",
        "/images/projects/hrms/attendance.png",
      ],
    },

    {
      id: 12,
      title: "Production Management System",
      category: "Business Software",
      description:
        "A production management solution for organizing manufacturing activities, monitoring production workflows and maintaining production records.",
      technologies: ["C#", ".NET", "SQL Server"],
      features: [
        "Production Planning and Tracking",
        "Production Workflow Monitoring",
        "Material Usage Records",
        "Production Record Management",
        "Production Reports",
      ],
      images: [
        "/images/projects/production/dashboard.png",
        "/images/projects/production/workflow.png",
        "/images/projects/production/reports.png",
      ],
    },

    {
      id: 13,
      title: "Quality Control (QC) Management System",
      category: "Business Software",
      description:
        "A quality control solution for documenting inspections, recording test results, identifying defects and monitoring product quality.",
      technologies: ["C#", ".NET", "SQL Server"],
      features: [
        "Quality Inspection Records",
        "Test Result Tracking",
        "Defect Identification",
        "Quality Monitoring",
        "Quality Control Reports",
      ],
      images: [
        "/images/projects/quality-control/dashboard.png",
        "/images/projects/quality-control/inspections.png",
        "/images/projects/quality-control/reports.png",
      ],
    },

    {
      id: 14,
      title: "Quality Assurance (QA) Management System",
      category: "Business Software",
      description:
        "A quality assurance solution focused on standardizing quality procedures, maintaining compliance records and supporting continuous process improvement.",
      technologies: ["C#", ".NET", "SQL Server"],
      features: [
        "Quality Procedure Documentation",
        "Compliance Record Management",
        "Process Audit Tracking",
        "Quality Standards Monitoring",
        "Quality Assurance Reports",
      ],
      images: [
        "/images/projects/quality-assurance/dashboard.png",
        "/images/projects/quality-assurance/procedures.png",
        "/images/projects/quality-assurance/audits.png",
      ],
    },
  ],
};