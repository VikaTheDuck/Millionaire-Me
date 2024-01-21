import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const MyBarChart = () => {
    const months = [1, 2, 3];
    const savings = [1000, 1001, 1002];

    const data = {
        labels: months.map((month) => `Month ${month}`),
        datasets: [
            {
                label: "Savings",
                data: savings,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default MyBarChart;
