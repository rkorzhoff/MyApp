import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>THIS IS HELLO-WORLD APP</Text>
      <View style={styles.elementsContainer}>
        <View style={styles.element}>
          <Text>some text here 1</Text>
        </View>
        <View style={styles.element}>
          <Text>some text here 1</Text>
        </View>
        <View style={styles.element}>
          <Text>some text here 1</Text>
        </View>
        <View style={styles.element}>
          <Text>some text here 1</Text>
        </View>
        <View style={styles.element}>
          <Text>some text here 1</Text>
        </View>
        <View style={styles.element}>
          <Text>some text here 1</Text>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  mainHeader: {
    paddingTop: 150,
    fontSize: 30,
  },
  elementsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150,
  },
  element: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    maxWidth: 120,
    margin: 5,
    minHeight: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
});
