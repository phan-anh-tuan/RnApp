import React from 'react';
var uuid = require('react-native-uuid');
import { StyleSheet, View, Button, StatusBar } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native'

import { Auth, API, graphqlOperation }  from 'aws-amplify';
import TimeAllowanceAdd from './TimeAllowanceAdd.js';
import { createTimeAllowance, deleteTimeAllowance } from './src/graphql/mutations';
import { listTimeAllowances } from './src/graphql/queries';

class AppEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            stage: 'ListTimeAllowances',
            allowances: []
        };
        this.addAllowance    = this.addAllowance.bind(this);
        this.removeAllowance = this.removeAllowance.bind(this);
    }

    componentDidMount() {
        API.graphql(graphqlOperation(listTimeAllowances))
        .then(allowances => {
          console.log('querying data ... ' + JSON.stringify(allowances.data.listTimeAllowances.items));
          this.setState((state,props) => {
                                            return {...this.state, allowances: allowances.data.listTimeAllowances.items}
                                        });
        })
        .catch(error => console.error(error));
    }

    componentWillUnmount() {

    }

    addAllowance(allowance,date,note) {
        // console.log("submitting " + allowance + " minutes for " + date + " with note " + note);
        const item = { "id": uuid.v4(), date, allowance, note};
        API.graphql(graphqlOperation(createTimeAllowance, {input: item}))
          .then(result => console.log(result))
          .catch(error => console.error(error));
        this.setState((state,props) => {
            return {...state, allowances: [item,...state.allowances]}
        })
    }

    removeAllowance(id) {
        API.graphql(graphqlOperation(deleteTimeAllowance, { input: { id }}))
          .then(result => console.log(result))
          .catch(error => console.error(error));
        this.setState((state,props) => {
            return {...state, allowances: state.allowances.filter(item => item.id != id)}
        })
    }

    render() {
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
        return (<View style={styles.container}>
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
                    stage={this.state.stage}
                    allowances={this.state.allowances}
                    removeAllowance={this.removeAllowance}
                    addAllowance={this.addAllowance}/>
                </View>
            </View>)
    }
}

export default withAuthenticator(AppEntry)