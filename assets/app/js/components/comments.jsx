var
  React = require('react'),
  styles,
  Comments;

styles = {

};

Comments = React.createClass({
  propTypes: {
    comments: React.PropTypes.array.isRequired
  },

  getDefaultProps: function () {
    return {
      comments: []
    };
  },

  render: function() {
    var
      commentEls;

    comments.map((commentItem) => {
      return (
        <li key={commentItem.commentID}>
          <p>{commentItem.comment}</p>
        </li>
      );
    });

    return (
      <ul>
        {commentEls}
      </ul>
    );
  }
});

module.exports = Comments;

