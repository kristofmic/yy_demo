var
  React = require('react'),
  yaksStore = require('../stores/yaks_store'),
  { fetchYaks } = require('../actions/action_factory'),
  FeedItem = require('./feed_item'),
  NewFeedItems = require('./new_feed_items'),
  Loading = require('./loading'),
  styles,
  Feed;

styles = {};

Feed = React.createClass({
  propTypes: { },

  getInitialState: function () {
    var
      yaksStoreState = yaksStore.getState();

    return {
      messages: yaksStoreState.messages
    };
  },

  componentDidMount: function () {
    yaksStore.addChangeListener(this.handleStoreChange);

    if (hasGeoLocation()) {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    }
    else {
      fetchYaks();
      this.fetchYaksPolling = setInterval(fetchYaks, 10000);
    }

    function locationSuccess(pos) {
      var
        latLong = {
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        };

      fetchYaks(latLong);
      this.fetchYaksPolling = setInterval(() => {
        fetchYaks(latLong);
      }, 10000);
    }

    function locationError(posErr) {
      fetchYaks();
      this.fetchYaksPolling = setInterval(fetchYaks, 10000);
    }
  },

  componentWillUnmount: function () {
    yaksStore.removeChangeListener(this.handleStoreChange);
    clearInterval(this.fetchyaksPolling);
  },

  handleStoreChange: function() {
    var
      yaksStoreState = yaksStore.getState();

    this.setState({
      messages: yaksStoreState.messages
    });
  },

  render: function() {
    var
      messages = this.state.messages,
      messageItems;

    if (messages.length) {
      messageItems = messages.map((message) => {
        return (
          <FeedItem key={message.messageID} message={message} />
        );
      });
    }
    else {
      messageItems = (
        <Loading message="Loading Yaks..."   />
      );
    }

    return (
      <div className="row">
        <div className="col-xs-12">
          <NewFeedItems />
          <ul className="list-unstyled yaks">
            {messageItems}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Feed;

function hasGeoLocation() {
  return navigator &&
         navigator.geolocation &&
         (typeof navigator.geolocation.getCurrentPosition === 'function');
}