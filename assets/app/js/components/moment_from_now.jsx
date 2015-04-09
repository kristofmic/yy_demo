const
  MINUTE = 1000 * 60;

var
  React = require('react'),
  moment = require('moment'),
  MomentFromNow;

MomentFromNow = React.createClass({
  propTypes: {
    time: React.PropTypes.string.isRequired
  },

  getInitialState: function () {
    return {
      fromNow: this.getMoment()
    };
  },

  componentDidMount: function () {
    this.momentInterval = setInterval(() => {
      this.setState({
        fromNow: this.getMoment()
      })
    }, MINUTE)
  },

  componentWillUnmount: function () {
    clearInterval(this.momentInterval);
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    return this.state.fromNow !== nextState.fromNow;
  },

  getMoment: function() {
    return moment(this.props.time).fromNow();
  },

  render: function() {
    return (
      <span>
        {this.state.fromNow}
      </span>
    );
  }
});

module.exports = MomentFromNow;