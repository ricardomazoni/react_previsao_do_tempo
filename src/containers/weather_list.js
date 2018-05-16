import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather=> weather.main.temp)
        const pressures = cityData.list.map(weather=> weather.main.pressure)
        const humiditys = cityData.list.map(weather=> weather.main.humidity)
        const { lon, lat } = cityData.city.coord
        // console.log(temps)

        return (
            <tr key={ name }>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color='orange' units='K'/></td>
                <td><Chart data={pressures} color='green' units='hPa'/></td>
                <td><Chart data={humiditys} color='black' units='%'/></td>
            </tr>
        )
    }
    render() {
        return (
            <table className='table table-hover' >
                <thead>
                    <tr>
                        <th>Cidade</th>
                        <th>Temperatura (K)</th>
                        <th>Pressão(hPa)</th>
                        <th>Umidade(%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)