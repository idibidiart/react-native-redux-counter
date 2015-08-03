// This is the smart component, which binds actions passed down through children
// passed as props in the action const below, on line 24.
// the syntax for this is the connector code below
// note how the actions are passed in by being bound, so we can change the actions
// passed in by changing the file/variable read from
var React = require('react-native');
var { bindActionCreators } = require('redux');
var { Connector } = require('redux/react-native');
var Counter = require('../components/Counter');
var CounterActions = require('../actions/CounterActions');

var { View } = React;

var CounterApp = React.createClass({
  render() {
    return (
      <Connector select={state => ({ counter: state.counter })}>
        {this.renderChild}
      </Connector>
    );
  },

  renderChild({ counter, dispatch }) {
    const actions = bindActionCreators(CounterActions, dispatch);
    return (
      <Counter counter={counter}
               actions={actions} />
    );
  }
});

module.exports = CounterApp;
