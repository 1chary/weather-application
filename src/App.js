import { CiSearch } from "react-icons/ci"
import { IoMoon } from "react-icons/io5"
import { WiDaySunny } from "react-icons/wi"
import "./App.css"
import { useState } from "react"
import WeatherReportCard from "./components/WeatherReportCard"
import ContextFile from "./ContextFile"
import ApiFailureCard from "./components/ApiFailureCard"

const App = () => {
  const [userInput,changeUserInput] = useState("")
  const [storeResponseData,enterWeatherData] = useState(null);
  const [noUserInputMessage, displayNoInputMessage] = useState(false);
  const [apiFailureMessage,displayApiFailure] = useState(false);
  const [modeOfApplication,changeModeOfTheApplication] = useState(false)

  const onChangeUserInput = (event) => {
    changeUserInput(event.target.value)
  }

  const submitTheInputDetails = async (event) => {
    event.preventDefault()
    if (userInput !== "") {
      const fetchingDetails = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${userInput}&appid=2fe74895e927cbe81e92169f1a159f12`)
      if (fetchingDetails.ok === true) {
        const data = await fetchingDetails.json()
        const dataConversion = {
            latitude: data.coord.lat,
            longitude: data.coord.lon,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            temperature: data.main.temp,
            condition: data.weather[0].main,
            wind:data.wind.speed,
            city: data.name,
            country: data.sys.country
          };
          enterWeatherData(dataConversion)
          displayNoInputMessage(false)
      }
      else {
        displayApiFailure(true)
      }
    }
    else {
      displayNoInputMessage(true)
    }
  }

  const changeMode = () => {
    changeModeOfTheApplication(!modeOfApplication)
  }

  let backgroundOfTheContainer = modeOfApplication ? "dark" : "light"

  return (
    <ContextFile.Provider value = {[modeOfApplication,changeModeOfTheApplication]}>
      <div className = {`container-element ${backgroundOfTheContainer}`}>
    <form className = "form-container" onSubmit = {submitTheInputDetails}>
      <div className = "search-container">
        <input type = "search" className = "search-input-box"  onChange = {onChangeUserInput} placeholder = "Enter City Name /  Zip Code"/>
        <button type = "submit" className="icon-button-style">
          <CiSearch className="icon-style" />
        </button>
        <button type = "button" onClick={changeMode} className="icon-button-style">
          {modeOfApplication ? < WiDaySunny className="icon-style" /> :  <IoMoon className="icon-style"/>}
        </button>
      </div>
      {noUserInputMessage && (
        <p className="no-input-error-message">*Enter the city name or zip code*</p>
      )}
      {storeResponseData && (
        < WeatherReportCard weatherReport = {storeResponseData} />
      )}
      {apiFailureMessage && (
        < ApiFailureCard />
      )}
    </form>
  </div>
    </ContextFile.Provider>
  )
}

export default App