import { AgChartOptions } from "ag-charts-community";

export function getBarChartOptions(data: any[]): AgChartOptions {
    return {
        data: data,
        title: {
            text: "Hours by Client",
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
            },
            {
                type: "number",
                position: "left",
                title: {
                    text: "Hours",
                },
            },
        ],
    };
}

export function getPieChartOptions(data: any[]): AgChartOptions {
    return {
        data: data,
        title: {
            text: "Hours by Project Type",
        },
        series: [
            {
                type: "pie",
                angleKey: "hours",
                calloutLabelKey: "type",
                sectorLabelKey: "hours",
                sectorLabel: {
                    color: "white",
                    fontWeight: "bold",
                },
            },
        ],
    };
}
