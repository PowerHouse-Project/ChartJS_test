export const lineChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Previous Month (KwH)",
      data: [33, 53, 85, 41, 44, 65, 76, 34, 55, 48, 12, 62],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Current Month (KwH)",
      data: [33, 25, 35, 51, 14, 76, 87, 45, 25, 74, 76, 94],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

export const barChartData = {
  labels: [
    "Smart Light",
    "Smart AC",
    "Smart Fridge",
    "Smart TV",
    "Smart Oven",
    "Smart Washing Machine",
  ],
  datasets: [
    {
      label: "Previous Month (KwH)",
      data: [33, 53, 85, 41, 44, 65],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
    {
      label: "Current Month (KwH)",
      data: [33, 25, 35, 51, 14, 76],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

export const pieChartData = {
  labels: [
    "Smart Light",
    "Smart AC",
    "Smart Fridge",
    "Smart TV",
    "Smart Oven",
    "Smart Washing Machine",
  ],
  datasets: [
    {
      label: "Current Month (KwH)",
      data: [33, 53, 85, 41, 44, 65],
      backgroundColor: [
        "rgba(75,192,192,0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(75,192,192,1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 205, 86, 1)",
        "rgba(201, 203, 207, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
      hoverOffset: 4,
    },
  ],
};
