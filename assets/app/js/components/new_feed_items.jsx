var
  React = require('react'),
  { loadNewYaks } = require('../actions/action_factory'),
  yaksStore = require('../stores/yaks_store'),
  styles,
  NewFeedItems;

styles = {
  flash: {
    backgroundColor: '#ac95c7',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    boxShadow: '0 2px 5px rgba(0, 0, 0, .2)',
    zIndex: 1000
  },
  message: {
    margin: 0,
    color: '#fff',
    fontSize: '18px'
  }
};

NewFeedItems = React.createClass({
  getInitialState: function () {
    var
      yaksStoreState = yaksStore.getState();

    return {
      newMessagesCount: yaksStoreState.newMessages.length
    };
  },

  componentDidMount: function () {
    yaksStore.addChangeListener(this.handleStoreChange);
  },

  componentWillUnmount: function () {
    yaksStore.removeChangeListener(this.handleStoreChange);
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    return this.state.newMessagesCount !== nextState.newMessagesCount
  },

  handleStoreChange: function () {
    var
      yaksStoreState = yaksStore.getState();

    this.setState({
      newMessagesCount: yaksStoreState.newMessages.length
    });
  },

  loadNewMessages: function() {
    loadNewYaks();
    window.scrollTo(0, 0);
  },

  render: function() {
    var
      count = this.state.newMessagesCount,
      flashEl,
      message;

    if (count > 0) {
      message = `${count} new message`;

      if (count > 1) message += 's';

      flashEl = (
        <div style={styles.flash}>
          <p className="btn btn-link" style={styles.message} onClick={this.loadNewMessages}>
            {message}
          </p>
        </div>
      );
    }

    return (
      <div>
        {flashEl}
      </div>
    );
  }
});

module.exports = NewFeedItems;