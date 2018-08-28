import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

// or any pure javascript modules available in npm
import Collapsible from 'react-native-collapsible'; // 0.9.0

export default class App extends Component {
  state = {
    outerCollapse: true,
    innerCollapse: true,
  };
  render() {
    return (
      <View style={styles.container}>
    
        <Button
          title="Toggle Outer"
          onPress={() =>
            this.setState({ outerCollapse: !this.state.outerCollapse })}
        />
        <Collapsible collapsed={this.state.outerCollapse}>
          <Text style={styles.center}>I'm outer</Text>
          
          <Button title="Toggle Inner" onPress={() =>
            this.setState({ innerCollapse: !this.state.innerCollapse })}/>
            
          <Collapsible collapsed={this.state.innerCollapse}>
            <Text style={styles.center}>I'm inner</Text>
          </Collapsible>
        </Collapsible>

        <Button
          title="Toggle Outer Number 2"
          onPress={() =>
            this.setState({ outerCollapse: !this.state.outerCollapse })}
        />
        <Collapsible collapsed={this.state.outerCollapse}>
          <Text style={styles.center}>I'm outer</Text>
          
          <Button title="Toggle Inner Number 2" onPress={() =>
            this.setState({ innerCollapse: !this.state.innerCollapse })}/>
            
          <Collapsible collapsed={this.state.innerCollapse}>
            <Text style={styles.center}>I'm inner</Text>
          </Collapsible>
        </Collapsible>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  center: {
    textAlign: 'center'
  }
});
