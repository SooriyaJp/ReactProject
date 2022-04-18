import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props)
{
    const totalValues=props.datapoints.map(datapoint => datapoint.value);
    const totalMax=Math.max(...totalValues);
    return <div className="chart">
        {
            props.datapoints.map(datapoint => (
                <ChartBar
                    key={datapoint.label}
                    value ={datapoint.value}
                    maxValue={totalMax}
                    label={datapoint.label}
                />

            ))
        }
    </div>
}


export default Chart;