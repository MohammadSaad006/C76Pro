import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
          <View 
          style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
          }}>
            <Text>HomeScreen</Text>
            </View>
        )
    }
}