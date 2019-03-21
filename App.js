import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Animation from 'lottie-react-native'

import thumbsupAnimation from './assets/5000-thumbs-up.json'


export default class App extends Component {

  componentDidMount(){
    this.animation.play()
  }

  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Lottie Animations by OS Authority :-)</Text>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 200,
              height: 200
            }}
            loop={true}
            source={thumbsupAnimation}
          />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#000'
  }
});
