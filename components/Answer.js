import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import AnswerButtons from './AnswerButtons';
import NewAnswerInput from './NewAnswerInput.js';

export default class Answer extends Component {
    static propTypes = {
        answer: PropTypes.string.isRequired,
        questionCount: PropTypes.number.isRequired
        // onYes: PropTypes.func.isRequired,
        // onNo: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { gameOver: false };
    }

    render() {
        if(!this.state.gameOver) {
            return (
                <View style={{flex: 1}}>
                  <View style={styles.answerTextView}>
                    <Text style={styles.answer} >
                      { this.props.answer }
                    </Text>
                  </View>
                  <AnswerButtons
                    onYes = { () => {this.setState({ playerWonGame: false,
                    gameOver: true });}}
                    onNo = { () => {this.setState({ playerWonGame: true,
                    gameOver: true});}} >
                  </AnswerButtons>
                </View>
            );
        } else if(this.state.playerWonGame) {
            return (
                <NewAnswerInput
                  newGame = { this.props.newGame }
                  addNewQuestion = { this.props.addNewQuestion }
                  wrongAnswer = { this.props.answer }
                       >
                </NewAnswerInput>
            );
        }
        else if(!this.state.playerWonGame) {
            return (
                <View style={{flex: 1}}>
                  <View style={styles.answerTextView}>
                    <Text style={styles.answer} >
                      Yay, I win!
                    </Text>
                    <Text style={styles.answer} >
                      Shall we play again?
                    </Text>
                  </View>
                  <AnswerButtons
                    onYes = { this.props.newGame }
                    onNo = { () => {this.setState({text: "Bye for now! :-)",
                    playerWonGame: true});}} >
                  </AnswerButtons>
                </View> );
        }
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
