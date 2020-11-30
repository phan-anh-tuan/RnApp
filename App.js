// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button} from 'react-native';
import config from './aws-exports';
import React, { useState }from 'react';

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify, {Auth} from 'aws-amplify';
import TimeAllowanceAdd from './TimeAllowanceAdd.js';

// import StorageHelper from './storage-helper-rn.js';

// var storage = new StorageHelper().getStorage();

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: config.aws_cognito_identity_pool_id,

        // REQUIRED - Amazon Cognito Region
        region: config.aws_cognito_region,

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: config.aws_cognito_region,

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: config.aws_user_pools_id,

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: config.aws_user_pools_web_client_id,

        // OPTIONAL - customized storage object
        // storage: storage,

         // OPTIONAL - Hosted UI configuration
        oauth: config. oauth
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    // justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // alignSelf: 'flex-end',
    // alignItems: 'stretch',

  },
  body: {
    flex: 8,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    // justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: "green",
    // borderRadius: 6
  }
});

const App = (props) => {
  var [stage, setStage] = useState("ListTimeAllowances");
  return (
  <View style={styles.container}>
      <View style={styles.header}>
        <Button
            onPress={() => Auth.signOut()}
            title="Sign Out"
            color="#841584"
            accessibilityLabel="Sign Out"
            style={{alignItems: "flex-end"}}
        />
      </View>
      <View style={styles.body}>
        <TimeAllowanceAdd stage={stage} submitAllowance={(val,_date,note) => console.log("submitting " + val + " minutes for " + _date + " with note " + note)}/>
      </View>
  </View> 
)};
export default withAuthenticator(App)