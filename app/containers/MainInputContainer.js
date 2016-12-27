var React = require('react');
var style = require('../styles');
var InputContainer = require('./InputContainer');

function MainInput () {
  return (
    <div className="mainInputForm text-center col-md-5 col-md-offset-3" style={style.mainInput}>
      <h1>Enter a City and a State</h1>
      <InputContainer  />
    </div>

    );
}

module.exports = MainInput;