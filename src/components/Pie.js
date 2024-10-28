import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { pieChartData } from "../data/test_data";

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "This is a Pie Chart",
      },
    },
  };

  return <Pie options={options} data={pieChartData} />;
};
