import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { date: new Date }
    console.debug("test message")
  }

  
  componentDidMount() {

    setInterval(() => { this.tick() }, 1000)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentWillUnmount() {
    clearInterval(this.Timer)
    console.debug("test message2")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> The Time is now:
          {this.state.date.toLocaleTimeString()}
        </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
