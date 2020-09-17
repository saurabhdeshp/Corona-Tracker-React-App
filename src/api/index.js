import axios from 'axios'

const API = 'https://covid19.mathdro.id/api';

//function to fetch the data
export const fetchData = async () => {
    try {
        const { data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get(API)
        
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }

    } catch (error) {
        
    }
}

export const fetchDailyData = async () =>{
    try {
        const { data } = await axios.get(`${API}/daily`)

        const modifiedData = data.map((dailydata) => ({
            confirmed: dailydata.confirmed.total,
            deaths : dailydata.deaths.total,
            date: dailydata.reportDate,
        }))

        return modifiedData;
    } catch (error) {
        
    }
}