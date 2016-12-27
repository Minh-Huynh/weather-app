var React = require('react');
var Input = require('./Input');
var InputContainer = require('../containers/InputContainer');

function Navbar () {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <div className="navbar-brand">
            Weather App
          </div>
        </div>
        <div className="navbar-form navbar-right">
         <InputContainer />
        </div>
    </nav>
    );
}

module.exports = Navbar;