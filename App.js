// Import necessary components and hooks from React and React Native.
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// Define the main App component.
export default function App() {
  // Declare a state variable 'message' with its initial value as an empty string.
  // 'setMessage' is a function we can use to update this state.
  const [message, setMessage] = useState('');

  return (
      <View style={styles.container}>
        {/* Render three buttons. Each button has an onPress handler that updates the message when pressed. */}
        <Button
            title="Press me #1"
            onPress={() => setMessage('You pressed the first button!')}
        />
        <Button
            title="Press me #2"
            onPress={() => setMessage('You pressed the second button!')}
            // Apply a style to create space between the buttons.
            style={styles.buttonSpacing}
        />
        <Button
            title="Press me #3"
            onPress={() => setMessage('You pressed the third button!')}
            // Apply a style to create space between the buttons.
            style={styles.buttonSpacing}
        />
        {/* Display the message below the buttons. The message changes depending on which button was last pressed. */}
        <Text style={styles.messageText}>{message}</Text>
      </View>
  );
}

// Define styles for the components.
const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Ensure the container takes up the full available space.
    justifyContent: 'center', // Center its children vertically.
    paddingHorizontal: 20,    // Add horizontal padding.
    backgroundColor: '#fff',  // Set the background color to white.
  },
  buttonSpacing: {
    marginVertical: 10,       // Add vertical margin (above and below) to create spacing between buttons.
  },
  messageText: {
    marginTop: 20,            // Add space above the message text.
    textAlign: 'center',     // Center the text horizontally.
    fontSize: 16,             // Set font size.
  },
});
