import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import AnswerButtons from './AnswerButtons';

export default class Question extends Component {
    static propTypes = {
    question: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    questionCount: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired
  }

  render() {
      return (
          <View style={{flex: 1}}>
            <View style={styles.questionTextView}>
              <Text style={styles.question} > {this.props.questionCount }  </Text>
              <Text style={styles.question} >
                { this.props.question }
              </Text>
            </View>
            <AnswerButtons
              onYes = {this.props.onForward }
              onNo = { this.props.onBack } >
            </ AnswerButtons>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  questionTextView:{
    flex: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 30
  }
});
