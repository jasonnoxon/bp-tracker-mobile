import React from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';

export default class CollectPressureData extends React.Component {
  state = { systolic: '', diastolic: '' };

  _onButtonPress = event => {
    this.props.onPress(this.state.systolic, this.state.diastolic);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Systolic</Text>
        <TextInput
          style={{
            height: 40,
            width: 100,
            borderColor: '#000',
            borderWidth: 1,
            marginBottom: 10
          }}
          onChangeText={text => this.setState({ systolic: text })}
          value={this.state.systolic}
          keyboardType="number-pad"
        />
        <Text>Diastolic</Text>
        <TextInput
          style={{
            height: 40,
            width: 100,
            borderColor: '#000',
            borderWidth: 1
          }}
          onChangeText={text => this.setState({ diastolic: text })}
          value={this.state.diastolic}
          keyboardType="number-pad"
        />
        <View style={styles.buttonContainer}>
          <Button onPress={this._onButtonPress} title="Send" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    margin: 20
  }
});
