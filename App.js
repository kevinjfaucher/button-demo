import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// Define the main App component as a class.
export default class App extends React.Component {
    constructor(props) {
        super(props);
        // Initialize the state with a property 'message' set to an empty string.
        this.state = {
            message: ''
        };
    }

    // These methods will update the state with the appropriate message based on which button was pressed.
    handleButton1Press = () => {
        this.setState({ message: 'You pressed the first button!' });
    }

    handleButton2Press = () => {
        this.setState({ message: 'You pressed the second button!' });
    }

    handleButton3Press = () => {
        this.setState({ message: 'You pressed the third button!' });
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Press me #1"
                    onPress={this.handleButton1Press}
                />
                <Button
                    title="Press me #2"
                    onPress={this.handleButton2Press}
                    style={styles.buttonSpacing}
                />
                <Button
                    title="Press me #3"
                    onPress={this.handleButton3Press}
                    style={styles.buttonSpacing}
                />
                <Text style={styles.messageText}>{this.state.message}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    buttonSpacing: {
        marginVertical: 10,
    },
    messageText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
    },
});
