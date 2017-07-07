const request = require('request');
const argv = require('yargs').argv;

let apiKey = '75685783b30a2be1f1301bb83b2f0784';
let city = argv.c || 'nantes';
let lang = 'us';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=${lang}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    message = `La température est de ${weather.main.temp} degrés à ${weather.name}, la pression atmosphérique est de ${weather.main.pressure} hPa`;
	message += `\navec ${weather.clouds.all}% de nuages et un vent de ${weather.wind.speed} m/s`
    console.log(message);
  }
});

