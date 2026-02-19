export const generateClientData = () => {
    return [
        { client: "Acme Corp", hours: 320 },
        { client: "Beta Inc", hours: 240 },
        { client: "Gamma LLC", hours: 180 },
        { client: "Delta Co", hours: 150 },
    ];
};

export const generateProjectData = () => {
    return [
        { type: "Website", hours: 280 },
        { type: "Mobile App", hours: 220 },
        { type: "Admin", hours: 160 },
        { type: "Consulting", hours: 230 },
    ];
};

export const summaryCards = [
    {
        title: "Active Employees",
        value: "247",
        subtitle: "+12 this month",
        icon: "users",
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Pending Approvals",
        value: "18",
        subtitle: "Across all managers",
        icon: "clock",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        title: "Total Hours (MTD)",
        value: "9,840",
        subtitle: "+8% from last month",
        icon: "trending-up",
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Billable Hours",
        value: "7,230",
        subtitle: "73% utilization",
        icon: "dollar-sign",
        color: "bg-green-100 text-green-600"
    }
];

export const bottomCards = [
    {
        title: "Clients",
        value: "42"
    },
    {
        title: "Projects",
        value: "128"
    },
    {
        title: "Task Codes",
        value: "35"
    },
    {
        title: "Reports",
        value: "View",
        isLink: true
    }
];
