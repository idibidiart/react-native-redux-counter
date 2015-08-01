// this is a dumb component, whos only job is to take in the state (counter)
// and the actions passed to it, and provide a way for the user to interact
// with those actions
var React = require('react-native');

var {View, TouchableHighlight, Text, StyleSheet, PropTypes } = React;

var styles = StyleSheet.create({
  container: {
    marginTop:20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});
var Counter = React.createClass({
  propTypes: {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  },

  render() {
    const { counter } = this.props;
    const { increment, incrementIfOdd, decrement } = this.props.actions;
    return (
      <View style={styles.container}>
        <Text>Clicked: {counter} times</Text>

        <TouchableHighlight onPress={increment}><Text>+</Text></TouchableHighlight>

        <TouchableHighlight onPress={decrement}><Text>-</Text></TouchableHighlight>

        <TouchableHighlight onPress={incrementIfOdd}><Text>Increment if odd</Text></TouchableHighlight>
      </View>
    );
  }
});

module.exports = Counter;
