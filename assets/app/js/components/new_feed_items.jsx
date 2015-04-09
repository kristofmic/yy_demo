var
  React = require('react'),
  { loadNewYaks } = require('../actions/action_factory'),
  styles,
  NewFeedItems;

styles = {
  listItem: {
    padding: '15px 30px',
    backgroundColor: '#57e2ca',
    borderTop: '2px solid #f4f6f5',
    borderBottom: '2px solid #f4f6f5'
  },
  message: {
    margin: 0,
    color: '#fff',
    fontSize: '18px'
  }
};

NewFeedItems = React.createClass({
  propTypes: {
    newMessagesCount: React.PropTypes.number.isRequired
  },

  getDefaultProps: function () {
    return {
      newMessagesCount: 0
    };
  },

  loadNewMessages: function() {
    loadNewYaks();
  },

  render: function() {
    var
      message = `${this.props.newMessagesCount} new message`;

    if (this.props.newMessagesCount !== 1) {
      message += 's';
    }

    return (
      <li style={styles.listItem}>
        <p className="btn btn-link" style={styles.message} onClick={this.loadNewMessages}>{message}</p>
      </li>
    );
  }
});

module.exports = NewFeedItems;