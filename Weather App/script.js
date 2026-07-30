function showWeather(){

const city=document.getElementById("city").value;

let temp,condition,humidity,wind;

if(city==""){

alert("Please select a city");

return;

}

switch(city){

case "Lahore":
temp="35°C";
condition="Sunny";
humidity="55%";
wind="12 km/h";
break;

case "Karachi":
temp="31°C";
condition="Cloudy";
humidity="70%";
wind="18 km/h";
break;

case "Islamabad":
temp="28°C";
condition="Rainy";
humidity="80%";
wind="10 km/h";
break;

case "Multan":
temp="40°C";
condition="Hot";
humidity="45%";
wind="15 km/h";
break;

case "Peshawar":
temp="33°C";
condition="Partly Cloudy";
humidity="60%";
wind="14 km/h";
break;

}

document.getElementById("cityName").innerHTML=city;

document.getElementById("temperature").innerHTML="🌡 Temperature: "+temp;

document.getElementById("condition").innerHTML="🌤 Condition: "+condition;

document.getElementById("humidity").innerHTML="💧 Humidity: "+humidity;

document.getElementById("wind").innerHTML="🌬 Wind Speed: "+wind;

}