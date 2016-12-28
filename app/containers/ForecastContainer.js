var React = require('react');
var Forecast = require('../components/Forecast');
var openWeather = require('../utils/openWeather');


var forecastContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			loading: true,
			city: '',
			weatherData: []
		}
	},
	componentWillReceiveProps: function (prevProps) {
		console.log("componentDidUpdate");
		if (prevProps.location.query.city !== this.props.location.query.city) {
			openWeather.getWeatherData(this.props.location.query.city)
			.then(function (days) {
				this.setState({
				city: this.props.location.query.city,
				weatherData: this.parseWeatherData(days.data.list)
				})
			}.bind(this));
		}
	},
	componentDidMount: function () {
		console.log("componentDidMount");
		openWeather.getWeatherData(this.props.location.query.city)
		.then(function (days) {
			this.setState({
				city: this.props.location.query.city,
				weatherData: this.parseWeatherData(days.data.list)
			});
		}.bind(this));
	},
	parseWeatherData: function (data) {
		return data.map (function (obj) {
			return {
				date: obj.dt_txt, 
				temperature: obj.main.temp, 
				description: obj.weather[0].description, 
				icon: obj.weather[0].icon}
		});
	},
	render: function () {
		console.log("render");
		var ForecastDays = this.state.weatherData.map(function (obj, index) {
					return (<li key={index}><Forecast date={obj.date} temp={obj.temperature} description={obj.description} icon={obj.icon}/></li>);
				})
		return(
			<ul className="list-unstyled list-inline">
				{ForecastDays}
			</ul>
			)
	}
});



module.exports = forecastContainer;