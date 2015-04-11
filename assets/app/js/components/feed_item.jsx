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
    fontWeight: '600',
    padding: 0
  },
  thumbnail: {
    height: '300px',
    border: '4px solid #fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    margin: '10px 0'
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

  fetchComments: function (yakId) {

  },

  render: function() {
    var
      message = this.props.message,
      repliesText = 'replies',
      thumbnailEl,
      commentsEl;

    if (message.thumbNailUrl) {
      thumbnailEl = (<img style={styles.thumbnail} src={message.thumbNailUrl} />);
    }

    if (message.comments) {
      if (message.comments === 1) repliesText = 'reply';

      commentsEl = (
        <button className="btn btn-link" style={styles.replies} onClick={this.fetchComments.bind(this, yakId)}>
          <i className="fa fa-comments" style={styles.icon}></i>
          {`${message.comments} ${repliesText}`}
        </button>
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