var React = require('react');
var Input = require('../components/Input');


var inputContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/getForecast',
      query: {
        city: this.state.city
      }
    });
    
  },
  handleUpdate: function (e) {
    this.setState({
      city: e.target.value
    });
  },
  render: function () {
    return (
        <Input onSubmit={this.handleSubmit} onUpdate={this.handleUpdate} />
      );
  }

});

module.exports = inputContainer;