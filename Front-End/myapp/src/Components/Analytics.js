import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
function Analytics() {
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2", // "light1", "dark1", "dark2"
        title:{
            text: "Trip Expenses"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",		
            startAngle: -90,
            dataPoints: [
                { y: 20, label: "Airfare" },
                { y: 24, label: "Food & Drinks" },
                { y: 20, label: "Accomodation" },
                { y: 14, label: "Transportation" },
                { y: 12, label: "Activities" },
                { y: 10, label: "Misc" }	
            ]
        }]
    }

  return (
    <div>
      <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
    </div>
  )
}

export default Analytics
