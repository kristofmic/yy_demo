var
  React = require('react'),
  moment = require('moment'),
  styles,
  MomentFromNow;

styles = {
  timestamp: {
    position: 'absolute',
    bottom: '5px',
    left: '28px'
  }
};

MomentFromNow = React.createClass({
  propTypes: {
    time: React.PropTypes.string.isRequired
  },

  getMoment: function(time) {
    return moment(time).fromNow();
  },

  render: function() {
    return (
      <div style={styles.timestamp}>
        <i className="fa fa-clock-o"></i>
        {this.getMoment(this.props.time)}
      </div>
    );
  }
});

module.exports = MomentFromNow;