var
  React = require('react'),
  MomentFromNow = require('./moment_from_now'),
  styles,
  FeedItem;

styles = {
  listItem: {
    backgroundColor: '#FFF',
    padding: '15px 30px 30px 30px',
    position: 'relative',
    minHeight: '100px'
  },
  message: {
    margin: 0,
    fontSize: '18px'
  },
  likes: {
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#57e2ca',
    padding: '2px 12px',
    marginTop: '-5px',
    borderRadius: '4px'
  },
  timestamp: {
    color: 'rgba(99, 115, 112, .6)',
    position: 'absolute',
    bottom: '5px',
    left: '28px'
  }
};

FeedItem = React.createClass({
  propTypes: {
    message: React.PropTypes.object.isRequired
  },

  getDefaultProps: function () {
    return {
      message: {}
    };
  },

  render: function() {
    return (
      <li style={styles.listItem}>
        <div style={styles.likes}>{this.props.message.numberOfLikes}</div>
        <p style={styles.message}>{this.props.message.message}</p>
        <div style={styles.timestamp}>
          <i className="fa fa-clock-o" style={{marginRight: '5px'}}></i>
          <MomentFromNow time={this.props.message.time} />
        </div>
        <div className="separator"></div>
      </li>
    );
  }
});

module.exports = FeedItem;