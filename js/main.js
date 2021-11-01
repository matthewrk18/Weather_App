const getDataF = async () => {
    let city = document.querySelector('.search-bar').value;
    
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=`)

    console.log(response.data)
    return response.data
}

const getDataC = async () => {
    let city = document.querySelector('.search-bar').value;
    
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=`)

    console.log(response.data)
    return response.data
}

const displayDataF = async () => {
    let data = await getDataF();
    console.log(data)

        let city = data.name;
        let high = data.main.temp_max;
        let low = data.main.temp_min;
        let description = data.weather[0].description;
        let icon = data.weather[0].icon;
        let humidity = data.main.humidity;
        let wind = data.wind.speed;
        let cloud = data.clouds.all;
        let sunrise = data.sys.sunrise*1000
        let sunset = data.sys.sunset*1000

        let sunrisedateObject = new Date(sunrise)
        let sunriseDateFormat = sunrisedateObject.toLocaleString("en-US", {hour: "numeric", minute: "numeric"})   
        
        let sunsetdateObject = new Date(sunset)
        let sunsetDateFormat = sunsetdateObject.toLocaleString("en-US", {hour: "numeric", minute: "numeric"})


        document.querySelector('.city').innerText = "Weather in " + city
        document.querySelector('.low').innerText = "Low Temp: " + low + "°F"
        document.querySelector('.high').innerText = "High Temp: " + high + "°F"
        document.querySelector('.description').innerText = description
        document.querySelector('.icon').src ="https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector('.humidity').innerText =  "Humidity: " + humidity + "%"
        document.querySelector('.wind').innerText =  "Wind speed: " + wind + "mph"
        document.querySelector('.cloud').innerText =  "Cloudiness: " + cloud + "%"
        document.querySelector('.sunrise').innerText =  "Sunrise: " + sunriseDateFormat
        document.querySelector('.sunset').innerText =  "Sunset: " + sunsetDateFormat
}

const displayDataC = async () => {
    let data = await getDataC();
    console.log(data)

        let city = data.name;
        let high = data.main.temp_max;
        let low = data.main.temp_min;
        let description = data.weather[0].description;
        let icon = data.weather[0].icon;
        let humidity = data.main.humidity;
        let wind = data.wind.speed;
        let cloud = data.clouds.all;
        let sunrise = data.sys.sunrise*1000
        let sunset = data.sys.sunset*1000

        let sunrisedateObject = new Date(sunrise)
        let sunriseDateFormat = sunrisedateObject.toLocaleString("en-US", {hour: "numeric", minute: "numeric"})   
        
        let sunsetdateObject = new Date(sunset)
        let sunsetDateFormat = sunsetdateObject.toLocaleString("en-US", {hour: "numeric", minute: "numeric"})


        document.querySelector('.city').innerText = "Weather in " + city
        document.querySelector('.low').innerText = "Low Temp: " + low + "°C"
        document.querySelector('.high').innerText = "High Temp: " + high + "°C"
        document.querySelector('.description').innerText = description
        document.querySelector('.icon').src ="https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector('.humidity').innerText =  "Humidity: " + humidity + "%"
        document.querySelector('.wind').innerText =  "Wind speed: " + wind + "km/h"
        document.querySelector('.cloud').innerText =  "Cloudiness: " + cloud + "%"
        document.querySelector('.sunrise').innerText =  "Sunrise: " + sunriseDateFormat
        document.querySelector('.sunset').innerText =  "Sunset: " + sunsetDateFormat
}

