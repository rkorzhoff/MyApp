import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'localstorage-polyfill';

export default function App() {
  const [title, setTitle] = useState('This is hello world App');

  useEffect(() => {
    const data = localStorage.getItem('currentTitle');
    if (data) {
      setTitle(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentTitle', JSON.stringify(title));
  });

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>{title}</Text>
      <View style={styles.elementsContainer}>
        <Text style={styles.element} onPress={() => setTitle('some text here 1')}>
          some text here 1
        </Text>

        <Text style={styles.element} onPress={() => setTitle('some text here 2')}>
          some text here 2
        </Text>

        <Text style={styles.element} onPress={() => setTitle('some text here 3')}>
          some text here 3
        </Text>

        <Text style={styles.element} onPress={() => setTitle('some text here 4')}>
          some text here 4
        </Text>

        <Text style={styles.element} onPress={() => setTitle('some text here 5')}>
          some text here 5
        </Text>

        <Text style={styles.element} onPress={() => setTitle('some text here 6')}>
          some text here 6
        </Text>
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
