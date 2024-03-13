import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView component

export default function App() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'http://kutumbfront.ramo.co.in/' }} style={{ flex: 1 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
