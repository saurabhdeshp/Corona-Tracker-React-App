import React, { Component } from 'react'
import { Chart, Cards, CountryPicker} from './Components' // import them at once
import styles from './App.module.css'
import {fetchData} from './api/index'

class App extends Component{
    state = {
        data: {}
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data : fetchedData})
    }


    render(){
        return(
            <div className={styles.container}>

                <Cards data={ this.state.data }/>
                <Chart />
                <CountryPicker />
            </div>
            
        )
    }
}
export default App; 