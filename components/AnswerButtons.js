import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';


export default class AnswerButtons extends Component {
  static propTypes = {
    onYes: PropTypes.func.isRequired,
    onNo: PropTypes.func.isRequired
  }
  render() {
      return (
            <View style={styles.answerButtons} >
              <TouchableHighlight
                onPress={this.props.onYes}
                style={[styles.green, styles.answerButton]} >
                <Text style={styles.answerButtonText}>
                  Yes
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={this.props.onNo}
                style={[styles.answerButton, styles.red]}>
                <Text style={styles.answerButtonText}>
                  No
                </Text>
              </TouchableHighlight>
            </View>
      );
  }
}

const styles = StyleSheet.create({
  answerButtons: {
    flexDirection: 'row',
//    flex: 1
  },
  answerButton:{
    flex: 1,
  },
  answerButtonText:{
    textAlignVertical: 'center',
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  }
});
