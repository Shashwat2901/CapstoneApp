import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

import firebase from 'firebase'

class SignOut extends Component{

  
  componentDidMount(){
    firebase.auth().signOut()
  }
  render(){
    return(
      <Text>You are being Signed Out</Text>
    )
  }

}
export default SignOut;
