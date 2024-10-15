import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  BarElement,
  ArcElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import WidthSize from "../WidthSize";
import ChartContext from "../ContextAll";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const DoughtutChart = () => {

  const {allData}=useContext(ChartContext)
  const DChartData = {
    labels:"",
    datasets: [
      {
        label: "randomdata",
        data: allData.map((item) => item.value),
        backgroundColor: ["rgb(53, 138, 148)", "white"],
        borderWidth: 0.5,
        borderColor: "white",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="dchart">
      <Doughnut data={DChartData} options={options} height={120} width={600}/>
    </div>
  );
};

export default DoughtutChart;
