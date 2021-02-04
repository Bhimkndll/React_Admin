import React, { useState, useEffect } from "react";
import {Line} from 'react-chartjs-2';
import axios from "axios";

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];

    {/*axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }*/}
        setChartData({
          labels:["monday","tuesday","wednesday","thursday","Friday","Saturday"],
          datasets: [
            {
             lineTension: 0.4,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 205, 23, 1)",
      pointRadius: 6,
      pointBackgroundColor: "rgba(a78, 115, 223, 1)",
      pointBorderColor: "rgba(s78, 115, 223, 1)",
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [0, 10000, 5000, 15000, 10000, 2, 15000, 25000],
            }
          ]
        });
     }

  useEffect(() => {
    chart();
  }, []);
  return (
    <>
        <Line
          data={chartData}
          options={{
    maintainAspectRatio: false,


            title: { text: "THICCNESS SCALE", display: false },
            scales: {
              yAxes: [
                {
                  ticks: {

                    autoSkip: true,
                    maxTicksLimit:10,
                    beginAtZero: true
                  },
                  gridLines: {

                    display:true
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
     </>
  );
};

export default Dankmemes;
