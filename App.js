import { StatusBar, BackHandler } from 'react-native'; // Import BackHandler
import React, { useEffect, useRef, useState } from 'react'; // Import useEffect, useRef, and useState
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [canGoBack, setCanGoBack] = useState(false); // State variable to track if WebView can go back
  const webViewRef = useRef(null); // Reference to WebView component

  // Function to handle the back button press
  const handleBackButton = () => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
      return true; // Prevent default behavior
    }
    return false;
  };

  // Add event listener for hardware back button press when component mounts
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    // Remove event listener when component unmounts
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [canGoBack]); // Re-run effect when canGoBack changes

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: 'http://kutumbfront.ramo.co.in/' }}
        style={{ flex: 1 }}
        // Update canGoBack state based on navigation state changes
        onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
