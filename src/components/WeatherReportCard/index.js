import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5"
import { FaWind } from "react-icons/fa";
import { TbWorldLatitude } from "react-icons/tb";
import { TbWorldLongitude } from "react-icons/tb";
import "./index.css"
import { useContext } from "react";
import ContextFile from "../../ContextFile";

const WeatherReportCard = (props) => {
    const { weatherReport } = props
    const [modeOfApplication,changeModeOfTheApplication] = useContext(ContextFile)
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

    let colorBasedOnMode = modeOfApplication ?"dark-mode": "light-mode"

    return (
        <div className="weather-details-container">
            <div className="city-and-date-container">
                <div className="city-and-country-container">
                    < CiLocationOn className= {`icon-style ${colorBasedOnMode}`}/>
                    <h1 className= {`city-name-style ${colorBasedOnMode}`}>{weatherReport.city},<span>{weatherReport.country}</span> </h1>
                </div>
                <div className="date-container">
                        <MdOutlineDateRange className={`icon-style ${colorBasedOnMode}`}/>
                        <p className={`date-style ${colorBasedOnMode}`}>{getDate}-{getMonth}-{getYear}</p>
                        < IoTime className={`icon-style ${colorBasedOnMode}`}/>
                        <p className={`date-style ${colorBasedOnMode}`}>{getHours}:{minutes}</p>
                </div>
            </div>
            <div className="temperature-container">
                <h2 className= {`${colorBasedOnMode}`}>{weatherReport.temperature}</h2>
                < TbTemperatureCelsius className={`icon-style ${colorBasedOnMode}`} />
            </div>
            <div className="outer-container-style">
                <div className="inner-container-style">
                    <WiHumidity className= {`icon-style ${colorBasedOnMode}`}/>
                    <p className= {`font-styling ${colorBasedOnMode}`}>{weatherReport.humidity} % humidity</p>
                </div>
                <div className="inner-container-style">
                    <FaWind className={`icon-style ${colorBasedOnMode}`}/>
                    <p className={`font-styling ${colorBasedOnMode}`}>{weatherReport.wind} km/h Wind Speed</p>
                </div>
            </div>
            <div className="outer-container-style">
            <div className="inner-container-style">
                    <TbWorldLatitude className={`icon-style ${colorBasedOnMode}`}/>
                    <p className= {`font-styling ${colorBasedOnMode}`}>{weatherReport.latitude}</p>
                </div>
                <div className="inner-container-style">
                    <TbWorldLongitude className={`icon-style ${colorBasedOnMode}`}/>
                    <p className= {`font-styling ${colorBasedOnMode}`}>{weatherReport.longitude}</p>
                </div>
            </div>
        </div>
    )
}
export default WeatherReportCard