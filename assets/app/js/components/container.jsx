var
  React = require('react'),
  { RouteHandler } = require('react-router'),
  styles,
  Container;

styles = {
  container: {
    padding: '0 15px',
    borderTop: 'none'
  }
};

Container = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },

  render: function () {
    return (
      <div className="container" style={styles.container}>
        <RouteHandler {...this.props} />
      </div>
    );
  }
});

module.exports = Container;
