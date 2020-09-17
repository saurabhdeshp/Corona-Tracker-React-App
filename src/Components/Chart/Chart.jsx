import React, {useState, useEffect} from 'react'
import { fetchDailyData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

export const Chart =  () =>{
    const data = fetchDailyData();
    // console.log(data)
    const [dailyData, setDailyData] = useState([])

    

    useEffect(() => {
        const fetchFromAPI = async () => {
            const dailydata = await fetchDailyData();
            setDailyData(dailydata)
            // console.log(dailydata.map((date) => date))
        }

        fetchFromAPI();
    })

    const lineChart = (
        dailyData ? (
            <Line
            data = {{
                labels: dailyData.map(({date})=>date),
                datasets: [{
                    type: 'line',
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                    backgroundColor:'rgba(0, 0, 255, 0.2)' 
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    fill: true,
                    // backgroundColor:'rgba(255, 0. 0,0.1)' 
                }]
            }}
            />
        ) : null
    )



    return(
        <div>
            {lineChart}
        </div>
    )

}

export default Chart;