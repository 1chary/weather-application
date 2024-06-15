import { CiSearch } from "react-icons/ci"
import "./App.css"
import { useState } from "react"
import WeatherReportCard from "./components/WeatherReportCard"

const App = () => {
  const [userInput,changeUserInput] = useState("")
  const [storeResponseData,enterWeatherData] = useState(null);
  const [noUserInputMessage, displayNoInputMessage] = useState(false);
  const [apiFailureMessage,displayApiFailure] = useState(false);



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

  return (
  <div className = "container-element">
    <form className = "form-container" onSubmit = {submitTheInputDetails}>
      <div className = "search-container">
        <input type = "search" className = "search-input-box"  onChange = {onChangeUserInput} placeholder = "Enter City Name /  Zip Code"/>
        <button type = "submit" className="search-icon-button-style">
          <CiSearch className="icon-style" />
        </button>
      </div>
      {noUserInputMessage && (
        <p className="no-input-error-message">*Enter the city name or zip code*</p>
      )}
      {storeResponseData && (
        < WeatherReportCard weatherReport = {storeResponseData} />
      )}
    </form>
  </div>
  )
}

export default App