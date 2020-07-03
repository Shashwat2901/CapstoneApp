import React from 'react'
import {View,Text} from 'react-native'
import {Card} from 'react-native-elements'
import {Address} from './Address'
import {ScrollView} from 'react-native'


class ContactComponent extends React.Component{
constructor(){
  super()

}
static navigationOptions ={
  title : "Contact Us"
}
render(){
  return(
    <Card
    title ="Contact Information">
    <Text style={{margin:10}}>{Address.AddressLine1}</Text>
    <Text style={{margin:10}}>{Address.AddressLine3}</Text>
    <Text style={{margin:10}}>{Address.AddressLine2}</Text>
    <Text style={{margin:10}}>{Address.Country}</Text>
    <Text style={{margin:10}}>Tel: {Address.Telephone}</Text>
    <Text style={{margin:10}}>Email: {Address.Email}</Text>
    </Card>

  )
}
}

export default ContactComponent ;
