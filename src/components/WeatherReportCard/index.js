import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5"
import { FaWind } from "react-icons/fa";
import { TbWorldLatitude } from "react-icons/tb";
import { TbWorldLongitude } from "react-icons/tb";
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
                    < CiLocationOn className="icon-style"/>
                    <h1 className="city-name-style">{weatherReport.city},<span>{weatherReport.country}</span> </h1>
                </div>
                <div className="date-container">
                        <MdOutlineDateRange className="icon-style"/>
                        <h2 className="date-style">{getDate}-{getMonth}-{getYear}</h2>
                        < IoTime className="icon-style"/>
                        <h2 className="date-style">{getHours}:{minutes}</h2>
                </div>
            </div>
            <h2>{weatherReport.condition}</h2>
            <div className="temperature-container">
                <h1>{weatherReport.temperature}</h1>
                < TbTemperatureCelsius className="icon-style" />
            </div>
            <div className="outer-container-style">
                <div className="inner-container-style">
                    <WiHumidity className="icon-style"/>
                    <h3 className="font-styling">{weatherReport.humidity} % humidity</h3>
                </div>
                <div className="inner-container-style">
                    <FaWind className="icon-style"/>
                    <h3 className="font-styling">{weatherReport.wind} km/h Wind Speed</h3>
                </div>
            </div>
            <div className="outer-container-style">
            <div className="inner-container-style">
                    <TbWorldLatitude className="icon-style"/>
                    <h3 className="font-styling">{weatherReport.latitude}</h3>
                </div>
                <div className="inner-container-style">
                    <TbWorldLongitude className="icon-style"/>
                    <h3 className="font-styling">{weatherReport.longitude}</h3>
                </div>
            </div>
        </div>
        
    )
}
export default WeatherReportCard