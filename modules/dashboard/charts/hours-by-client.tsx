"use client";
import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { getBarChartOptions } from "../common/grid";
import { generateClientData } from "../common/data";

export default function HoursByClientChart() {
    const [options, setOptions] = useState<AgChartOptions>(
        getBarChartOptions(generateClientData())
    );

    return <AgCharts options={options} />;
}
