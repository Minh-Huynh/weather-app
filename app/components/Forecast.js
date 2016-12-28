var React = require('react');

function forecast (props) {
	var date = new Date(+props.date);
	return ( 
	<div className="well">
		<h5>{props.date}</h5>
		<span>{Math.round(props.temp)} degrees</span>
		<img src={'http://openweathermap.org/img/w/' + props.icon + '.png'} />
		<span>{props.description}</span>
	</div>
	);
}

module.exports = forecast;