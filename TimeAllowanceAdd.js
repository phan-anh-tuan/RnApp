import { StyleSheet, View, Text, Button, TextInput} from 'react-native';
import React, { useState } from 'react';
import { Redshift } from 'aws-sdk';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "stretch",
  },
  add_new_item_container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 4,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
  },
  add_new_item_row: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "row",
    // justifyContent: "flex-start",
    alignItems: 'center',

    // borderWidth: 1,
    // borderColor: "red",
    // borderRadius: 6
  },
  body: {
    flex: 10,
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 4
  },
  border: {
    borderWidth: 4,
    borderColor: "#EAEAEA",
    borderRadius: 1,
    padding: 10
  },
  _30_view: {
    flex: 0.3,
    // justifyContent: "center",
    // flexDirection: "column",
    // alignItems: "center",
    // alignSelf: "center",
    // borderWidth: 1,
    // borderColor: "black",
    // borderRadius: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
  _70_view: {
    flex: 0.7,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 1,
  }
});

const TimeAllowanceAdd = (props) => {
    if (props.stage != "ListTimeAllowances") {
        return null;
    }
    var [allowance, setAllowance] = useState(0);
    var [effectiveDate, setEffectiveDate] = useState((new Date()).toLocaleDateString());
    var [note, setNote] = useState("");


    return (
        <View style={styles.container}>
            <View style={styles.add_new_item_container}>
                <View style={styles.add_new_item_row}>
                    <Text style={styles._30_view}>Date:</Text>
                    <TextInput
                        onChangeText={val => setEffectiveDate(val)}
                        defaultValue={effectiveDate}
                        style = {{...styles.border, ...styles._70_view}}
                    />
                </View>
                <View style={styles.add_new_item_row}>
                    <Text style={styles._30_view}>Allowance:</Text>
                    <TextInput
                        placeholder="Time allowance in minutes"
                        onChangeText={val => setAllowance(val)}
                        defaultValue={allowance}
                        style = {{...styles.border, ...styles._70_view}}
                    />
                </View>
                <View style={styles.add_new_item_row}>
                    <Text style={styles._30_view}>Note:</Text>
                    <TextInput
                        placeholder="Rationale for the allowance"
                        onChangeText={val => setNote(val)}
                        defaultValue={note}
                        style = {{...styles.border, ...styles._70_view}}
                    />
                </View>
                <View style={{...styles.add_new_item_row, "alignSelf": "flex-end", "marginRight": 10}}>
                    <Button
                        onPress={() => props.submitAllowance(allowance,effectiveDate,note)}
                        title="Submit"
                        color="#841584"
                        accessibilityLabel="Submit"
                    />
                </View>
            </View>
            <View style={styles.body}>
                <Text>Allowance List</Text>
            </View>

        </View>) 
};
export default TimeAllowanceAdd