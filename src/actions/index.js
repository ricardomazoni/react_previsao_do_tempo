import axios from 'axios'

const API_KEY = 'dd6027dc51638f9cb2ee57d56afda1d6'

const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER
    }
}
