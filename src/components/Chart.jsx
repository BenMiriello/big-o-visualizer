import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const Chart = (props) => {

  return (
    <div clasName="chart">
      Run Time
      <Line
        data={{ 
          labels: props.labels, 
          datasets: [{
            label: props.fcn,
            fill: false,
            lineTension: 0.4,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 10,
            pointRadius: 0,
            // pointHitRadius: 10,
            data: props.data,
          } ]
        }}
        options={{
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                display: false,
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Chart;