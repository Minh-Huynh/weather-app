var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var MainInputContainer = require('..//containers/MainInputContainer');
var InputContainer = require('../containers/InputContainer');
var ForecastContainer  = require('../containers/ForecastContainer');

var routes = (
<Router history={hashHistory}>
  <Route path='/' component={Main}>
    <IndexRoute component={MainInputContainer} />
    <Route path='/getForecast' component={ForecastContainer} />
  </Route>
</Router>
);

module.exports = routes;