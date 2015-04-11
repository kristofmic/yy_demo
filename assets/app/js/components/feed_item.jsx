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
  timestamp: {
    color: 'rgba(99, 115, 112, .6)',
    position: 'absolute',
    bottom: '5px',
    left: '28px'
  },
  replies: {
    position: 'absolute',
    bottom: '5px',
    right: '30px',
    color: 'rgba(99, 115, 112, .6)',
    fontWeight: '600'
  },
  icon: {
    marginRight: '5px'
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
    var
      message = this.props.message,
      repliesText = 'replies',
      thumbnailEl,
      commentsEl;

    if (message.thumbNailUrl) {
      thumbnailEl = (<img className="thumbnail" src={message.thumbNailUrl} />);
    }

    if (message.comments) {
      if (message.comments === 1) repliesText = 'reply';

      commentsEl = (
        <div style={styles.replies}>
          <i className="fa fa-comments" style={styles.icon}></i>
          {`${message.comments} ${repliesText}`}
        </div>
      );
    }

    return (
      <li style={styles.listItem}>
        <div className="likes">{message.numberOfLikes}</div>
        <p style={styles.message}>{message.message}</p>
        {thumbnailEl}
        <div style={styles.timestamp}>
          <i className="fa fa-clock-o" style={styles.icon}></i>
          <MomentFromNow time={message.time} />
        </div>
        {commentsEl}
        <div className="separator"></div>
      </li>
    );
  }
});

module.exports = FeedItem;