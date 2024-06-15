import { TbTemperatureCelsius } from "react-icons/tb";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5"
import "./index.css"

const WeatherReportCard = (props) => {
    const { weatherReport } = props
    const date = new Date()
    const getYear = date.getFullYear()
    const getMonth = date.getMonth()
    const getDate = date.getDate()
    const getHours = date.getHours()
    const getMinutes = date.getMinutes()
    let minutes;
    if ( getMinutes <= 9) {
         minutes = `0${getMinutes}`
    }
    else {
        minutes = getMinutes
    }

    return (
        <div className="weather-details-container">
            <div className="city-and-date-container">
                <div className="city-and-country-container">
                    < CiLocationOn className="location-icon"/>
                    <h1 className="city-name-style">{weatherReport.city},<span>{weatherReport.country}</span> </h1>
                </div>
                <div className="date-container">
                        <MdOutlineDateRange />
                        <h2 className="date-style">{getDate}-{getMonth}-{getYear}</h2>
                        < IoTime />
                        <h2 className="date-style">{getHours}:{minutes}</h2>
                </div>
            </div>
            <h2>{weatherReport.condition}</h2>
            <div className="temperature-container">
                <h1>{weatherReport.temperature}</h1>
                < TbTemperatureCelsius className="celsius-icon" />
            </div>
            
        </div>
        
    )
}
export default WeatherReportCard