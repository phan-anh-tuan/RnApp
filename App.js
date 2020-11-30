// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, StatusBar } from 'react-native';
import config from './aws-exports-dev';
import React, { useState }from 'react';
var uuid = require('react-native-uuid');
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
    marginTop: StatusBar.currentHeight || 0,
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
  var [allowances, setAllowances] = useState([
      { 
        "id": uuid.v4(),
        "date": "2020/11/30",
        "allowance": 40,
        "note": "tree watering"
      },
      {
        "id": uuid.v4(),
        "date": "2020/11/29",
        "allowance": 40,
        "note": "book reading"
      }
    ]);

  return (
  <View style={styles.container}>
      <View style={styles.header}>
        <Button
            onPress={() => Auth.signOut()}
            title="Sign Out"
            color="#841584"
            accessibilityLabel="Sign Out"
            style={{alignItems: "flex-end", "paddingRight": 20}}
        />
      </View>
      <View style={styles.body}>
        <TimeAllowanceAdd
          stage={stage}
          allowances={allowances}
          removeAllowance={(id) => setAllowances(allowances.filter(item => item.id != id))}
          addAllowance={(val,_date,note) => {
            // console.log("submitting " + val + " minutes for " + _date + " with note " + note);
            setAllowances([{ "id": uuid.v4(), "date": _date, "allowance": val, note},...allowances]);
          }}/>
      </View>
  </View> 
)};
export default withAuthenticator(App)