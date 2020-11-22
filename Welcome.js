import React, { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';

class Welcome extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{visibility:this.props.visibility}}>
                <Text>Welcome to React Native world!</Text>
                <Button
                    onPress={() => this.props.signOut()}
                    title="Sign Out"
                    color="#841584"
                    accessibilityLabel="Sign Out"
                />
            </View>
        );
    }
}

export default Welcome;