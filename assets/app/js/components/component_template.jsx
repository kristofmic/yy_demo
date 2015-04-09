var
  React = require('react'),
  StoreTemplate = require('../stores/store_template'),
  ActionFactoryTemplate = require('../actions/action_factory_template'),
  Template;

Template = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  getInitialState () {
    return getState();
  },

  componentWillMount () {
    // this.handleChange is autobound by react, meaning we don't have to worry
    // about passing in this.handleChange.bind(this)
    StoreTemplate.addChangeListener(this.handleChange);
    ActionFactoryTemplate.templateAction(Math.random());
  },

  componentWillUnmount () {
    StoreTemplate.removeChangeListener(this.handleChange);
  },

  handleChange () {
    this.setState(getState());
  },

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p className="lead">{this.state.message}</p>
      </div>
    );
  }
})

module.exports = Template;

function getState() {
  return {
    message: StoreTemplate.getState().message
  };
}