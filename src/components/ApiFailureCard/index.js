import "./index.css"

const ApiFailureCard = () => (
    <div className="failure-container">
        <img src = "https://res.cloudinary.com/dowjvitxs/image/upload/v1709307868/Group_7522_e6aek6.png" alt = "failureImage" className="failure-image"/>
        <h1 className="api-failure-error-message">*FAILED TO FETCH CHECK API OR CONNECTION*</h1>
    </div>
)

export default ApiFailureCard