import React, { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { email: 'tuaph@amazon.com', password: 'Welc0me2@maz0n'};  
    }

    render() {
        return (
            <View style={{visibility:this.props.visibility}}>
                <Text>Email:</Text>                    
                <TextInput
                        style={{height: 40}}
                        placeholder="Enter your email"
                        onChangeText={email => this.state.email = email}
                        defaultValue={this.state.email}
                    />
                <Text>Password:</Text> 
                <TextInput
                    secureTextEntry={true}
                    style={{height: 40}}
                    placeholder="Enter your password"
                    onChangeText={password => this.state.password = password}
                    defaultValue={this.state.password}
                />
                <Button
                    onPress={() => this.props.signInFn(this.state.email, this.state.password)}
                    title="Sign In"
                    color="#841584"
                    accessibilityLabel="Sign In"
                />
            </View>
        );
    }
}

export default Login;