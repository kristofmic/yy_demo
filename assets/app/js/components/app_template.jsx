var
  React = require('react'),
  { Link, RouteHandler } = require('react-router'),
  Template = require('./component_template'),
  contentStyles,
  App;

contentStyles = {
  margin: '0',
  padding: '0 15px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderTop: 'none'
};

App = React.createClass({
  render () {
    return (
      <div className="container">
        <ul className="nav nav-tabs" style={{padding: '0', margin: '30px -15px 0 -15px'}}>
          <li role="presentation">
            <Link to="t1">
              <i className="glyphicon glyphicon-chevron-right"></i>
              Template 1
            </Link>
          </li>
          <li role="presentation">
            <Link to="t2">
              <i className="glyphicon glyphicon-chevron-left"></i>
              Template 2
            </Link>
          </li>
        </ul>
        <div className="row">
          <div className="col-xs-12" style={contentStyles}>
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});

App.T1 = React.createClass({
  render () {
    return (
      <Template title="Template component 1"/>
    );
  }
});

App.T2 = React.createClass({
  render () {
    return (
      <Template title="Template component 2"/>
    );
  }
});

module.exports = App;
