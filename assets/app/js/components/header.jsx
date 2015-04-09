var
  React = require('react'),
  styles,
  Header;

styles = {
  header: {
    width: '100%',
    backgroundColor: '#57e2ca',
    padding: '30px',
    color: '#FFF'
  },
  logo: {
    height: '48px'
  }
};

Header = React.createClass({
  render: function() {
    return (
      <div style={styles.header}>
        <div className="container">
          <div style={{float: 'right'}}>
            <a href="https://twitter.com/YikYakApp" className="social-icon"><i className="fa fa-twitter"></i></a>
            <a href="https://www.facebook.com/yikyakapp" className="social-icon"><i className="fa fa-facebook-official"></i></a>
            <a href="http://instagram.com/yikyakapp" className="social-icon"><i className="fa fa-instagram"></i></a>
          </div>
          <a href="http://yikyakapp.com">
            <img style={styles.logo} src="http://www.yikyakapp.com/wp-content/themes/yik-yak-web-general/img/global/logotype-white-01.svg" />
          </a>
          <h3 style={{marginBottom: 0}}>Heres the converation happening around you...</h3>
        </div>
      </div>
    );
  }
});

module.exports = Header;