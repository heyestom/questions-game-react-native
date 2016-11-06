import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import AnswerButtons from './AnswerButtons';

export default class Answer extends Component {
  static propTypes = {
    answer: PropTypes.string.isRequired,
    // onYes: PropTypes.func.isRequired,
    // onNo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {text: props.answer};
  }


  render() {
      return (
          <View style={{flex: 1}}>
            <View style={styles.answerTextView}>
              <Text style={styles.answer} >
                { this.state.text }
              </Text>
            </View>
            <AnswerButtons
              onYes = { () => {this.setState({text: "I win!" });}}
              onNo = { () => {this.setState({text: "You win Congrats!" });}} >
            </ AnswerButtons>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  answerTextView:{
    flex: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  answer: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 30
  }
});
