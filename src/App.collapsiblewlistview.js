import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ListView } from 'react-native';

// or any pure javascript modules available in npm
import Collapsible from 'react-native-collapsible'; // 0.9.0

// Row data (hard-coded)
const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
]

// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged})


export default class App extends Component {
  state = {
    outerCollapse: true,
    innerCollapse: true,
    outerCollapse2: true,
    innerCollapse2: true,
    dataSource: ds.cloneWithRows(rows),
  };


  renderRow = (rowData) => {
    return (
      <Text style={styles.row}>
        {rowData.text}
      </Text>
    )
  }

  render() {
     var { dataSource } = this.state;
     console.warn(dataSource)
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
            <ListView
                    style={styles.container}
                    dataSource={dataSource}
                    renderRow={this.renderRow}
                  />
          </Collapsible>
        </Collapsible>

        <Button
          title="Toggle Outer Number 2"
          onPress={() =>
            this.setState({ outerCollapse2: !this.state.outerCollapse2 })}
        />
        <Collapsible collapsed={this.state.outerCollapse2}>
          <Text style={styles.center}>I'm outer</Text>
          
          <Button title="Toggle Inner Number 2" onPress={() =>
            this.setState({ innerCollapse2: !this.state.innerCollapse2 })}/>
            
          <Collapsible collapsed={this.state.innerCollapse2}>
            <ListView
                    style={styles.container}
                    dataSource={dataSource}
                    renderRow={this.renderRow}
                  />
          </Collapsible>
        </Collapsible>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  center: {
    textAlign: 'center'
  }
});
