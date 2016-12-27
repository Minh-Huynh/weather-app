var React = require('react');
var style = require('../styles');

function Input (props) {
  return (
    <div className="form-group">
        <form onSubmit={props.onSubmit}>
          <input type="text" className="form-control" placeholder="Search" onChange={props.onUpdate} />
          <button type="submit" className="btn btn-success" style={style.navSubmit}>Get Weather</button>
        </form>
    </div>

    )
};

module.exports = Input;