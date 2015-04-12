var
  React = require('react'),
  commentsStore = require('../stores/comments_store'),
  yaksStore = require('../stores/yaks_store'),
  { fetchComments } = require('../actions/action_factory'),
  Loading = require('./loading'),
  MomentFromNow = require('./moment_from_now'),
  styles,
  Comments;

styles = {
  message: {
    borderTop: '4px solid #f4f6f5',
    borderBottom: '4px solid #f4f6f5',
    backgroundColor: '#57e2ca',
    color: '#FFF'
  }
};

Comments = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function () {
    return {
      params: {}
    };
  },

  getInitialState: function () {
    var
      id = decodeURIComponent(this.props.params.yakId),
      message = yaksStore.getMessage(id);

    return {
      message: message,
      comments: []
    };
  },

  componentDidMount: function () {
    fetchComments(this.props.params.yakId);

    commentsStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
    commentsStore.removeChangeListener(this.handleChange);
  },

  handleChange: function () {
    var
      id = decodeURIComponent(this.props.params.yakId),
      comments = commentsStore.getState().comments[id];

    this.setState({
      comments
    });
  },

  render: function() {
    var
      comments = this.state.comments,
      message = this.state.message,
      thumbnailEl,
      commentEls;

    if (message.thumbNailUrl) {
      thumbnailEl = (<img className="thumbnail" src={message.thumbNailUrl} />);
    }

    commentEls = [(
      <li key={message.messageID} className="list-item" style={styles.message}>
        <div className="likes">{message.numberOfLikes}</div>
        <p className="message">{message.message}</p>
        {thumbnailEl}
        <span style={{color: 'rgba(255, 255, 255, .7)'}}>
          <MomentFromNow time={message.time} />
        </span>
      </li>
    )];

    if (!comments.length) {
      commentEls.push(
        <Loading message="Loading comments..." />
      );
    }
    else {
      commentEls = commentEls.concat(comments.map((comment) => {
        return (
          <li key={comment.commentID} className="list-item">
            <div className="likes">{comment.numberOfLikes}</div>
            <p className="message">{comment.comment}</p>
            <span className="text-muted">
              <MomentFromNow time={comment.time} />
            </span>
            <div className="separator"></div>
          </li>
        );
      }));
    }

    return (
      <ul className="list-unstyled">
        {commentEls}
      </ul>
    );
  }
});

module.exports = Comments;

