import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import AnswerButtons from './AnswerButtons';

export default class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    questionCount: PropTypes.number.isRequired,
    onYes: PropTypes.func.isRequired,
    onNo: PropTypes.func.isRequired
  }

  render() {
      return (
          <View style={{flex: 1}}>
            <View style={styles.questionTextView}>
              <Text style={styles.question} >
                Question number: { this.props.questionCount }
              </Text>
              <Text style={styles.question} >
                { this.props.question.question }
              </Text>
            </View>
            <AnswerButtons
              onYes = { this.props.onYes }
              onNo = { this.props.onNo } >
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
