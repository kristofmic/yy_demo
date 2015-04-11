var
  React = require('react'),
  moment = require('moment'),
  MomentFromNow;

MomentFromNow = React.createClass({
  propTypes: {
    time: React.PropTypes.string.isRequired
  },

  getMoment: function(time) {
    return moment(time).fromNow();
  },

  render: function() {
    return (
      <span>
        {this.getMoment(this.props.time)}
      </span>
    );
  }
});

module.exports = MomentFromNow;