"use client";
import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { getPieChartOptions } from "../common/grid";
import { generateProjectData } from "../common/data";

export default function HoursByProjectTypeChart() {
    const [options, setOptions] = useState<AgChartOptions>(
        getPieChartOptions(generateProjectData())
    );

    return <AgCharts options={options} />;
}
