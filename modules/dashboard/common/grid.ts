export function getBarChartOptions(data: any[], theme: "light" | "dark"): any {
    const isDark = theme === "dark";
    const backgroundColor = isDark ? "#000000" : "#FFFFFF";
    const primaryTextColor = isDark ? "#FFFFFF" : "#111827";
    const secondaryTextColor = isDark ? "#9CA3AF" : "#6B7280";

    return {
        data: data,
        background: {
            fill: backgroundColor,
        },
        title: {
            text: "Hours by Client",
            color: primaryTextColor,
        },
        series: [
            {
                type: "bar",
                xKey: "client",
                yKey: "hours",
                yName: "Hours",
            },
        ],
        axes: [
            {
                type: "category",
                position: "bottom",
                label: {
                    color: secondaryTextColor,
                },
            },
            {
                type: "number",
                position: "left",
                title: {
                    text: "Hours",
                    color: secondaryTextColor,
                },
                label: {
                    color: secondaryTextColor,
                },
            },
        ],
        legend: {
            item: {
                label: {
                    color: primaryTextColor,
                },
            },
        },
    };
}

export function getPieChartOptions(data: any[], theme: "light" | "dark"): any {
    const isDark = theme === "dark";
    const backgroundColor = isDark ? "#000000" : "#FFFFFF";
    const primaryTextColor = isDark ? "#FFFFFF" : "#111827";
    const secondaryTextColor = isDark ? "#D1D5DB" : "#4B5563";

    return {
        data: data,
        background: {
            fill: backgroundColor,
        },
        title: {
            text: "Hours by Project Type",
            color: primaryTextColor,
        },
        series: [
            {
                type: "pie",
                angleKey: "hours",
                calloutLabelKey: "type",
                sectorLabelKey: "hours",
                sectorLabel: {
                    color: primaryTextColor,
                    fontWeight: "bold",
                },
            },
        ],
        legend: {
            item: {
                label: {
                    color: secondaryTextColor,
                },
            },
        },
    };
}
