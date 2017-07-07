const request = require('request');
const argv = require('yargs').argv;

let apiKey = '75685783b30a2be1f1301bb83b2f0784';
let city = argv.c || 'nantes';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});

