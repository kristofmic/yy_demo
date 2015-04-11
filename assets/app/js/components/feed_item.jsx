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

  render: function() {
    var
      replies = 'replies',
      thumbnail,
      comments;

    if (this.props.message.thumbNailUrl) {
      thumbnail = (<img style={styles.thumbnail} src={this.props.message.thumbNailUrl} />);
    }

    if (this.props.message.comments) {
      if (this.props.message.comments === 1) replies = 'reply';

      comments = (
        <div style={styles.replies}>
          <i className="fa fa-comments" style={styles.icon}></i>
          {`${this.props.message.comments} ${replies}`}
        </div>
      );
    }

    return (
      <li style={styles.listItem}>
        <div className="likes">{this.props.message.numberOfLikes}</div>
        <p style={styles.message}>{this.props.message.message}</p>
        {thumbnail}
        <div style={styles.timestamp}>
          <i className="fa fa-clock-o" style={styles.icon}></i>
          <MomentFromNow time={this.props.message.time} />
        </div>
        {comments}
        <div className="separator"></div>
      </li>
    );
  }
});

module.exports = FeedItem;