import { CiSearch } from "react-icons/ci"
import "./App.css"
import { useState } from "react"

const App = () => {
  const [userInput,changeUserInput] = useState("")

  const onChangeUserInput = (event) => {
    changeUserInput(event.target.value)
  }

  const submitTheInputDetails = async (event) => {
    event.preventDefault()
    if (userInput !== "") {
      const fetchingDetails = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${userInput}&appid=2fe74895e927cbe81e92169f1a159f12`)
      const data = await fetchingDetails.json()
      
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
    </form>
  </div>
  )
}

export default App