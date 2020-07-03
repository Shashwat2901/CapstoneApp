import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Platform
} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Video } from 'expo-av';
const PickFromCamera = async()=> {
  const {granted} = await Permissions.askAsync(Permissions.CAMERA)
  if(granted){
    let data = await ImagePicker.launchCameraAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Videos ,
      allowsEditing: true ,
      aspect :[1,1],
      quality :1 ,

    })
    console.log(data) ;


  }
  else{
    Alert.alert("You need to give us Permission to access Camera")
  }
}
const PickFromGallery = async()=> {
  const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  if(granted){
    let data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Videos ,
      allowsEditing: true ,
      aspect :[1,1],
      quality :1 ,
    })
    console.log(data);


  }
  else{
    Alert.alert("You need to give us Permission to access gallery")
  }
}

import firebase from 'firebase'


class Home extends Component{

  static navigationOptions = {
    title : "Home"
  }

  render(){

    return(
      <View style = {styles.container}>
      <View style = {styles.button}>
      <Button title = 'Upload Video from Gallery' onPress ={()=>this.PickFromGallery()}  />
      </View>
      <View style ={ styles.button}>
      <Button title = 'Shoot a live video to Upload' onPress = {()=>PickFromCamera()} style ={styles.button}/>
      </View>
      </View>
    )

}
};

export default Home ;
const styles = StyleSheet.create({
  container1:{
    flex:3 ,
    alignItems:'center',
    flexDirection :"column"
  },
  container:{
    flex:1 ,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between'
  },
  button:{
    width:'40%',
    height : 40,
    marginLeft: 10,
    marginRight:10
  },

})
