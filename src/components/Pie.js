import { Bar } from "react-chartjs-2";

import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { barChartData } from "../data/test_data";

ChartJS.register(Tooltip, Legend, ArcElement);

export const Pie = () => {
    const options = {};

    return <Bar options={options} data={} />;
}