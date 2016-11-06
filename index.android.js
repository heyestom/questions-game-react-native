/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import Question from './components/Question';

let question = "Is it alive?";

export default class Pangolins extends Component {
  render() {
    return (
        <Navigator
        style={{flex: 1}}
        initialRoute={{ question: question, questionCount: 0 }}
        renderScene={(route, navigator) =>
          <Question
            question={ route.question }
            questionCount={ route.questionCount }
            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.questionCount + 1;
                navigator.push({
                  question: 'You answered yes',
                  questionCount: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.questionCount > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Pangolins', () => Pangolins);
