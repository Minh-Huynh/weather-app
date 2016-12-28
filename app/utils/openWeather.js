var React = require('react');
var axios = require('axios');

const API_KEY = '3b45250f24926eb221a63e41c17b21fd';

var weather = {
	getWeatherData: function (city) {
	var cityStripped = city.replace(/ /g, '');
	return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityStripped + '&units=imperial&APPID=' + API_KEY)
	}
}

module.exports = weather;

