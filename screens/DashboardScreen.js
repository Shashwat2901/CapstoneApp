import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  Platform,
  Header,
} from 'react-native'
import {createStackNavigator , createDrawerNavigator , DrawerItems , SafeAreaView ,createAppContainer} from 'react-navigation'
import {Icon} from 'react-native-elements'
import Home from './HomeScreen'
import ContactComponent from './ContactScreen'
import SignOut from './SignOutScreen'
const HomeNavigator = createStackNavigator({
  Home : {screen : Home}
},{
  defaultNavigationOptions:({navigation})=>({
    headerStyle: {
      backgroundColor : '#512BA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      color : '#fff'
    },
    headerLeft:<Icon name = 'menu' size ={24} color ="white" onPress ={() => navigation.toggleDrawer()}/>
  })
})

const SignOutNavigator = createStackNavigator({
  SignOut : {screen : SignOut}
},{
  defaultNavigationOptions:({navigation})=>({
    headerStyle: {
      backgroundColor : '#512BA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      color : '#fff'
    },
    headerLeft:<Icon name = 'menu' size ={24} color ="white" onPress ={() => navigation.toggleDrawer()}/>
  })
})

const ContactNavigator = createStackNavigator({
  AboutUsComponent : {screen : ContactComponent}
},
{
  defaultNavigationOptions:({navigation})=>({
    headerStyle:{
      backgroundColor:'#512BA8'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      color : '#fff'
    },
    headerLeft:<Icon name = 'menu' size ={24} color ="white" onPress ={() => navigation.toggleDrawer()}/>
  })
})



const CustomDrawerContentComponent = (props) => (
  <ScrollView>
      <SafeAreaView style = {styles.container} forceInset = {{top:'always',horizontal:'never'}}>
        <View style = {styles.drawerHeader}>
          <View style ={{flex:1}}>
          <Image source = {require('./imagesUsed/logo.png')} style = {styles.drawerImage}/>
          </View>
          <View style = {{flex:2}}>
            <Text style = {styles.drawerHeaderText}>DeepFake Detection</Text>
          </View>
      </View>
      <DrawerItems {...props}/>
      </SafeAreaView>
  </ScrollView>
);



const MainNavigator = createDrawerNavigator({
  Home : {screen : HomeNavigator,
    navigationOptions:{
      title: "Home" ,
      drawerLabel : "Home",
      drawerIcon:  ({tintColor})=>(
        <Icon name = "home" type = "font-awesome"  size ={24}  color = {tintColor}/>
      )
    }
  }
,
  Contact :{
    screen: ContactNavigator,
    navigationOptions:{
      title: "Contact Us",
      drawerLabel : "Contact Us",
      drawerIcon:  ({tintColor})=>(
        <Icon name = "address-card" type = "font-awesome"  size ={22}  color = {tintColor}/>
      )
    }
  },
  SignOut: {screen : SignOutNavigator,
    navigationOptions:{
      title: "SignOut" ,
      drawerLabel : "SignOut",
      drawerIcon:  ({tintColor})=>(
        <Icon name = "list" type = "font-awesome"  size ={24}  color = {tintColor}/>
      )
    }
  }
},
{
  drawerBackgroundColor : '#D1C4E9',
contentComponent: CustomDrawerContentComponent}

 )
const MainContainer = createAppContainer(MainNavigator)
class DashboardScreen extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style= {{flex :1 , paddingTop:0}}>
      <MainContainer />
      </View>
    )
  }
}

export default DashboardScreen ;

const styles = StyleSheet.create({
  container:{
    flex:1 ,

  },
  drawerHeader:{
    backgroundColor: "#512DA8",
    height : 140,
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    flexDirection:'row',
  },
  drawerHeaderText:{
    color : 'white',
    fontSize:24,
    fontWeight:'bold',
  },
  drawerImage:{
    margin:10 ,
    width:80,
    height:60,
  }

})
