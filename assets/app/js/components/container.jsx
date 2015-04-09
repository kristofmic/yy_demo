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
  render: function () {
    return (
      <div className="container" style={styles.container}>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Container;
