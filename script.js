async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5c97df1955bdfa67d29a4a27cbbc6016`
	const response = await fetch(url)
	const data = await response.json();
	console.log(data)
}
//demo()

function fetchCity() {
	let cityName = document.getElementById("city_name");
	if(cityName.value===""){
		alert("Enter a city name");
	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";

	}
	
}