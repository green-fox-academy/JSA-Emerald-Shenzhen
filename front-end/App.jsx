import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NewLoan from './NewLoan/NewLoan.jsx'

import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { Container } from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={styles.container}>
        <NewLoan />
      </Container >
    );
  }
}