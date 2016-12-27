var React = require('react');
var router = require('react-router');
var Link = router.Link;
var style = require('../styles');
var Input = require('./Input');
var Navbar = require('./Navbar');

var Main = React.createClass({
  render: function () {
    return (
    <div>
      <Navbar />
      <div className="mainBody" style={style.main}>
        {this.props.children}
      </div>
    </div>
    );
  }
});

module.exports = Main;