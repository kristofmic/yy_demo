var
  React = require('react'),
  MomentFromNow = require('./moment_from_now'),
  { Link } = require('react-router'),
  styles,
  FeedItem;

styles = {
  replies: {
    position: 'absolute',
    bottom: '5px',
    right: '30px',
    fontWeight: '600',
    padding: 0
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
        <Link className="btn btn-link text-muted" style={styles.replies} to="comments" params={{yakId: encodeURIComponent(message.messageID)}}>
          <i className="fa fa-comments"></i>
          {`${message.comments} ${repliesText}`}
        </Link>
      );
    }

    return (
      <li className="list-item">
        <div className="likes">{message.numberOfLikes}</div>
        <p className="message">{message.message}</p>
        {thumbnailEl}
        <span className="text-muted">
          <MomentFromNow time={message.time} />
        </span>
        {commentsEl}
        <div className="separator"></div>
      </li>
    );
  }
});

module.exports = FeedItem;