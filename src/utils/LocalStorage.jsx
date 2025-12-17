const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare monthly report",
        description: "Create and submit the monthly performance report.",
        date: "2025-01-10",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client meeting",
        description: "Attend meeting with ABC client.",
        date: "2025-01-12",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix dashboard bug",
        description: "Resolve UI bug in dashboard charts.",
        date: "2025-01-08",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design login page",
        description: "Create UI for login and signup screens.",
        date: "2025-01-11",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update brand colors",
        description: "Apply updated brand color palette.",
        date: "2025-01-07",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Prepare presentation",
        description: "Prepare slides for design review.",
        date: "2025-01-14",
        category: "Presentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix mobile layout",
        description: "Resolve responsive layout issues.",
        date: "2025-01-09",
        category: "UI",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "API integration",
        description: "Integrate payment API.",
        date: "2025-01-13",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Database optimization",
        description: "Optimize database queries.",
        date: "2025-01-06",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write unit tests",
        description: "Add unit tests for services.",
        date: "2025-01-15",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Recruitment screening",
        description: "Screen resumes for frontend position.",
        date: "2025-01-10",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Employee onboarding",
        description: "Onboard new hires.",
        date: "2025-01-08",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Policy update",
        description: "Update company leave policy.",
        date: "2025-01-05",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Server monitoring",
        description: "Monitor server uptime.",
        date: "2025-01-11",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Deploy update",
        description: "Deploy latest version to production.",
        date: "2025-01-09",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Backup failure fix",
        description: "Fix automated backup failure.",
        date: "2025-01-07",
        category: "Infrastructure",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Security audit",
        description: "Run security audit on servers.",
        date: "2025-01-15",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    // tasks: []
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
};
