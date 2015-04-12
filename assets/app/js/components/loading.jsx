var
  React = require('react'),
  styles,
  Loading;

styles = {
  loading: {
    fontSize: '18px',
    padding: '15px 25px',
    backgroundColor: '#fff',
    margin: 0
  },
  loadingImg: {
    height: '28px',
    verticalAlign:'middle',
    marginRight: 10
  }
};

Loading = React.createClass({
  propTypes: {
    message: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      message: 'Loading...'
    };
  },

  render: function () {
    return (
      <li style={{position: 'relative'}}>
        <p style={styles.loading}>
          <img src="/img/yak.png" style={styles.loadingImg} className="fa-spin"/>
          {this.props.message}
        </p>
      </li>
    );
  }
});

module.exports = Loading;