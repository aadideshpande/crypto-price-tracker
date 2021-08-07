import React, { useRef, useEffect } from 'react';
import { Chart } from "chart.js";
import { historyOptions } from '../chartConfigs/chartConfigs';

const HistoryChart = ({ data }) => {
    const chartRef = useRef()
    const { day, week, year, detail } = data;
    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        data: day,
                        backgroundColor:
                            'rgba(255, 99, 132, 0.2)',
                        borderColor:
                            'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: historyOptions
            });
        }
    }, [])
    return (
        <div className="bg-white border mt-2 rounded p-3">
            <div>
                <canvas ref={chartRef} id="myChart" width={250} height={250} />
            </div>
        </div>
    )
}

export default HistoryChart
