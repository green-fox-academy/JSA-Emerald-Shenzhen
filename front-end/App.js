import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewLoan from './NewLoan/View';

export default function App() {
  return (
    <View style={styles.container}>
      <NewLoan />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0
  },
});
