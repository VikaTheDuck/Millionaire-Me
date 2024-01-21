// import React, { useState, useEffect } from 'react';
// import SavingsChart from './savingschart.js';
// import { Line } from 'react-chartjs-2';

// function ResultPage() {
//   const [resultData, setResultData] = useState({
//     yearCalculation: 0,
//     monthlyPayment:0,

//   });

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetchDataFromBackend();
//   }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

//   const fetchDataFromBackend = async () => {
//     try {
//       const response = await fetch('http://localhost:3003/info',{
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//     });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();

//       // Array values here, be careful!
//       const { monthlyPayment,yearCalculation,savingsArray, monthsArray } = data.data;

//       console.log(savingsArray, monthsArray); //cool

//       <SavingsChart
//         savingsArray={savingsArray}
//         monthsArray={monthsArray}
//       />

//       setResultData({
//         yearCalculation,
//         monthlyPayment: Math.round(monthlyPayment * 100) / 100,
//         savingsArray,
//         monthsArray
//       });
//       console.log(resultData.savingsArray);
//       // console.log("SAVINGS ARRAY    " + resultData);

//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//       // Handle error appropriately (e.g., show an error message to the user)
//     }
//   };

//   const SavingsChart = ({ savingsArray, monthsArray }) => {
//     const chartData = {
//       labels: monthsArray,
//       datasets: [
//         {
//           label: 'Savings Over Time',
//           data: savingsArray,
//           fill: false,
//           borderColor: 'rgba(75,192,192,1)',
//           borderWidth: 2,
//           pointRadius: 0, // Set to 0 to hide data points
//         },
//       ],
//     };

//     const chartOptions = {
//       scales: {
//         x: {
//           type: 'linear',
//           position: 'bottom',
//           ticks: {
//             stepSize: 1,
//           },
//         },
//         y: {
//           beginAtZero: true,
//           title: {
//             display: true,
//             text: 'Savings Amount',
//           },
//         },
//       },
//     };

//     return (
//       <div>
//           <h1>Your Result</h1>
//        <p>You will be a millionaire in {resultData.yearCalculation} years!</p>
//        <p>You will have a monthly payment to make of ${resultData.monthlyPayment}</p>
//         <ul>
//         {resultData.monthsArray.map((month, index) => (
//           <li key={index}>Month: {month}, Savings: ${resultData.savingsArray[index]}</li>
//         ))}
//       </ul>
//       </div>
//     );
//   };

//   // return (
//   //   <div>
//   //     <h1>Your Result</h1>
//   //     <p>You will be a millionaire in {resultData.yearCalculation} years!</p>
//   //     <p>You will have a monthly payment to make of ${resultData.monthlyPayment}</p>
//   //     <Line data={chartData} />

//   //     {/* <SavingsChart
//   //       savingsArray={resultData.savingsArray}
//   //       monthsArray={resultData.monthsArray}
//   //     /> */}

//   //   </div>
//   // );
// }

// export default ResultPage;

import React, { useState, useEffect } from "react";
import MyBarChart from "./barChart.js";

function ResultPage() {
    const [resultData, setResultData] = useState({
        yearCalculation: 0,
        monthlyPayment: 0,
        savingsArray: [],
        monthsArray: [],
    });

    useEffect(() => {
        const fetchDataFromBackend = async () => {
            try {
                const response = await fetch("http://localhost:3003/info", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();

                const {
                    monthlyPayment,
                    yearCalculation,
                    savingsArray,
                    monthsArray,
                } = data.data;
                console.log(savingsArray, monthsArray);

                setResultData({
                    yearCalculation,
                    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
                    savingsArray,
                    monthsArray,
                });
            } catch (error) {
                console.error("Error fetching data:", error.message);
                // Handle error appropriately (e.g., show an error message to the user)
            }
        };

        fetchDataFromBackend();
    }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

    return (
        <div className="text-center my-8 bg-gray-100 p-6 rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-green-600">
                Your Result
            </h1>
            <p>
                You will be a millionaire when you are{" "}
                {resultData.yearCalculation} years old!
            </p>
            <p>
                You will have a monthly payment to your debt of $
                {resultData.monthlyPayment}
            </p>
            <div className="w-3/4 mx-auto p-6 pt-10">
                <h1>My Savings Over Months</h1>
                <div>
                    <MyBarChart
                        savings={resultData.savingsArray}
                        months={resultData.monthsArray}
                    />
                </div>
            </div>

            <h2 className="text-xl font-bold my-4 pt-10">
                Here is an example of your savings Over Time
            </h2>

            <ul className="list-none pl-4">
                {resultData.monthsArray.slice(0, 4).map((month, index) => (
                    <li key={index} className="mb-2 pl-4">
                        <span className="font-bold">Year:</span> {month},{" "}
                        <span className="font-bold">Savings:</span> $
                        {resultData.savingsArray[index].toFixed(2)}{" "}
                        {/* Truncate to 2 decimal places */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResultPage;
