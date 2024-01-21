import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

// Updated MyBarChart to accept props
const MyBarChart = ({ months, savings }) => {
    const data = {
        labels: months.map((month) => `Month ${month}`),
        datasets: [
            {
                label: "Investments over time",
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

    return (<div className="flex justify-center ">
        <Bar data={data} options={options} />
    </div>)
};

export default MyBarChart;
