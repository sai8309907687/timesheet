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
        titleKey: "dashboardActiveEmployeesTitle",
        value: "247",
        subtitleKey: "dashboardActiveEmployeesSubtitle",
        icon: "users",
        color: "bg-blue-100 text-blue-600"
    },
    {
        titleKey: "dashboardPendingApprovalsTitle",
        value: "18",
        subtitleKey: "dashboardPendingApprovalsSubtitle",
        icon: "clock",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        titleKey: "dashboardTotalHoursTitle",
        value: "9,840",
        subtitleKey: "dashboardTotalHoursSubtitle",
        icon: "trending-up",
        color: "bg-purple-100 text-purple-600"
    },
    {
        titleKey: "dashboardBillableHoursTitle",
        value: "7,230",
        subtitleKey: "dashboardBillableHoursSubtitle",
        icon: "dollar-sign",
        color: "bg-green-100 text-green-600"
    }
];

export const bottomCards = [
    {
        titleKey: "dashboardClientsLabel",
        value: "42"
    },
    {
        titleKey: "dashboardProjectsLabel",
        value: "128"
    },
    {
        titleKey: "dashboardTaskCodesLabel",
        value: "35"
    },
    {
        titleKey: "dashboardReportsLabel",
        valueKey: "view",
        isLink: true
    }
];
