// a simple 'root' component for the application
// this binds the redux framework in with the provider syntax below
// this is the plugin to the redux framework, note this is pointing
// to the first smart component
var React = require('react-native');
var CounterApp = require('./CounterApp');
var { createRedux } = require('redux');
var { Provider } = require('redux/react-native');
var stores = require('../stores');

const redux = createRedux(stores);

var App = React.createClass({
  render() {
    return (
      <Provider redux={redux}>
        {() => <CounterApp />}
      </Provider>
    );
  }
});

module.exports = App;
