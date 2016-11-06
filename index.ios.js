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
import Answer from './components/Answer';

var questionTree = {
    question: "Is it Alive?",
    yes: {
        question: "Is it furry?",
        yes: {
            answer: "Is it a cat?"
        },
        no: {
            answer: "Is it a turtle?"
        }
    },
    no: {
        question: "It it edible?",
        yes: {
            answer: "Is it a pizza?"
        },
        no: {
            answer: "Is it a rock?"
        }
    }
};

export default class Pangolins extends Component {

    renderScene(route, navigator) {

        if(route.question.question){

            return ( <Question
            question={ route.question }
            questionCount={ route.questionCount }

            onYes={ () => {
              const nextIndex = route.questionCount + 1;
              const nextQuestion = route.question.yes;
                navigator.push({
                  question: nextQuestion,
                  questionCount: nextIndex
              });
            }}

            onNo={() => {
              const nextIndex = route.questionCount + 1;
              const nextQuestion = route.question.no;
                navigator.push({
                  question: nextQuestion,
                  questionCount: nextIndex
              });
            }}
          />);
        } else{
            return ( <Answer answer={route.question.answer} >
                     </ Answer>);
        }
  }


  render() {
    return (
        <Navigator
        style={{flex: 1}}
        initialRoute={{ question: questionTree, questionCount: 0 }}
        renderScene={ this.renderScene }
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
