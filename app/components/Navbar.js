var React = require('react');
var Input = require('./Input');
var InputContainer = require('../containers/InputContainer');
var Link = require('react-router').Link;
var style = require('../styles');

function Navbar () {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <div className="navbar-brand">
            <Link to="/" style={style.headerLink}> Weather App</Link>
          </div>
        </div>
        <div className="navbar-form navbar-right">
         <InputContainer />
        </div>
    </nav>
    );
}

module.exports = Navbar;