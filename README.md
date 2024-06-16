# Project Title
Responsive Weather Application

### Getting Started
=> npm install (These will install all dependencies)
=> npm start (To run this application)

### Description of the project 
=> When user enter the city name or zip code and clicks on the search icon he can able to view the city weather details like (Temperature, Humidity, Wind Speed, Latitude, Longitude, city with iso code of country, date and time) and also users have an additional feature to switch between light-mode and dark-mode.

### Approach 
This application is completely built using functional components,

=> Firstly initialized this project using create-react-app, In App.js file, i have initialized userinput variable by empty string with useState("") hook. which will store the user input, next to store the response data created another variable which the store the response data using useState(null) hook, if the user did not entered any input value and clicks on search button to trigger the input field is empty created a variable with boolean value false and in case any api failure or connection failure to trigger failed to fetch the data created an variable with boolean false.

=> Made used of the forms which is mostly used to store and submit the user entered credentials or data.In this project make used of fetch method to fetch the data from open weather api with the help of api_key after successfull response, response is converted into the json data then data is added using 'push method' and is passed as props to child components and in case of failure message variable will set to true and passed accordingly. 

=> Instead of dumping all the data in the one file created multiple components which believed to be one of the (Industry Best Practices) created two components to handle api success data and another for to display failure message.

=> Used logical operators if the value is true then only the data is passed to WeatherReportCard 
=> Similarly in this case if the value is true then Api failure message is passed to Api failure card component

=> Additionally to enhance user experience the light-mode and dark-mode feature is implemented using react context, a file seperately been created for context and value is passed using ContextFileName.Provider and accessed by use context() hook.

### Tools Used:
For Development: Visual Studio Code,
For Version Control System: Git

### Tech Stack:
HTML,CSS,JS,React JS.

### Deployed Project Link:
https://weather-application-woad-sigma.vercel.app/

### Further Improvements
=> user authentication can be added to this application. 
 
