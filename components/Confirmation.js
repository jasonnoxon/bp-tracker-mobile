import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class Confirmation extends React.Component {
  _onButtonPress = () => {
    this.props.onPress();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Data Sent!</Text>
        <Button
          style={styles.buttonContainer}
          onPress={this._onButtonPress}
          title="Add another entry"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    margin: 20
  }
});
