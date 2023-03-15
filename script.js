const apiKey = '92e948394a4fadd2c843a2e7ddab7c00';

function searchWeather() {
	const searchBar = document.getElementById('search-bar');
	const city = searchBar.value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const cityName = data.name;
			const temp = data.main.temp;
			const desc = data.weather[0].description;

			document.getElementById('city').innerHTML = cityName;
			document.getElementById('temp').innerHTML = `Temperature: ${temp} &#8451;`;
			document.getElementById('desc').innerHTML = `Description: ${desc}`;
		})
		.catch(error => {
			console.error('Error:', error);
			alert('City not found. Please try again.');
		});

	searchBar.value = '';
}
