async function fetchCity() {
    let city;

const url = "https://api.weatherapi.com/v1/current.json?key=ca7685f4ad1240139bd154225240607&q=Ankara&aqi=no";

await fetch(url)
    .then(response =>{
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("error");
        }
    })
    .then(data => {
        country = {
            location: data.location.name + ", Turkey ",
            temperature: data.current.temp_c + "°C " 
        }
        return country;
    })
    
    
    const temperature = document.querySelector("#temperature"); 
    const ankara = document.querySelector("#country");

    temperature.innerHTML=country.temperature;
    ankara.innerHTML=country.location;

} 

fetchCity();





    