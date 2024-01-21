
//BROKEN
// // SavingsChart.js
// import React from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';

// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const SavingsChart = ({ monthsArray, savingsArray }) => {
//   const options = {
//     animationEnabled: true,
//     exportEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Savings per Month"
//     },
//     axisY: {
//       title: "Savings",
//       suffix: "$"
//     },
//     axisX: {
//       title: "Month",
//       prefix: "m",
//       interval: 12
//     },
//     data: [{
//       type: "line",
//       toolTipContent: "Week {x}: {y}%",
//       dataPoints: monthsArray.map((month, index) => ({
//         x: month,
//         y: savingsArray[index]
//       }))
//     }]
//   };

//   return (
//     <div>
//       <CanvasJSChart options={options} />
//     </div>
//   );
// };

// export default SavingsChart;