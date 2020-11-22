import React, { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';

class Mfa extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { code: ''};  
    }

    render() {
        return (
            <View style={{visibility:this.props.visibility}}>
                <Text>OTP:&nbsp;</Text>
                <TextInput
                        style={{height: 40}}
                        placeholder="Enter the code here!"
                        onChangeText={code => this.setState({code})}
                        defaultValue={this.state.code}
                    />
                <Button
                    onPress={() => this.props.sendMFA(this.state.code)}
                    title="Sign In"
                    color="#841584"
                    accessibilityLabel="Sign In"
                />
            </View>
        );
    }
}

export default Mfa;