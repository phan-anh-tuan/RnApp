// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import config from './aws-exports';
import Amplify from 'aws-amplify';
import AppEntry from './AppEntry.js';

Amplify.configure(config);

// import StorageHelper from './storage-helper-rn.js';
// var storage = new StorageHelper().getStorage();
// Amplify.configure({
//     Auth: {

//         // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
//         identityPoolId: config.aws_cognito_identity_pool_id,

//         // REQUIRED - Amazon Cognito Region
//         region: config.aws_cognito_region,

//         // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
//         // Required only if it's different from Amazon Cognito Region
//         identityPoolRegion: config.aws_cognito_region,

//         // OPTIONAL - Amazon Cognito User Pool ID
//         userPoolId: config.aws_user_pools_id,

//         // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//         userPoolWebClientId: config.aws_user_pools_web_client_id,

//         // OPTIONAL - customized storage object
//         // storage: storage,

//          // OPTIONAL - Hosted UI configuration
//         oauth: config. oauth
//     }
// });

const App = (props) => {
  // var [stage, setStage] = useState("ListTimeAllowances");
  // var [allowances, setAllowances] = useState([
  //     { 
  //       "id": uuid.v4(),
  //       "date": "2020/11/30",
  //       "allowance": 40,
  //       "note": "tree watering"
  //     },
  //     {
  //       "id": uuid.v4(),
  //       "date": "2020/11/29",
  //       "allowance": 40,
  //       "note": "book reading"
  //     }
  //   ]);

  return (<AppEntry/>)
};

export default App;