import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image,TextInput} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules


const NamePage = ({navigation}) => {
  const [name,setName]=useState("");

  useEffect(() => {   
    SplashScreen.hide();
}, []);

 async function nextpage(){
    try {
      await AsyncStorage.setItem('namekey', name)
      console.log("done")
    } catch (e) {
      console.log("errorNamePage")
    }
    RNRestart.Restart();
  }

return(

  <View style={styles.headerview}>
    <Text style={{fontSize:30,marginTop:"40%",fontFamily:"AzoSans-Medium",marginLeft:"5%%"}}>Please enter your name</Text>
    <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={name => setName(name)}
        defaultValue={name}
        autoCorrect = {false}
      />
    <TouchableOpacity style={styles.touchable} onPress={()=> nextpage()}>
    <Image source={require('../../assets/welcome-next.png')} style={styles.next} />
    </TouchableOpacity>
  </View>
  );

  };

const styles = StyleSheet.create({
  headerview:{
    flex:1,
    backgroundColor:"#fff"
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: "7%",
    marginLeft:"5%",
    marginRight: 30,
    fontFamily:"AzoSans-Medium",
    borderBottomColor:"black",
    borderBottomWidth:1,
    fontSize:25,
    textAlign:'center'
  },
  lion:{width: "40%", height: "30%",marginTop: "20%",marginLeft:"30%",},
  touchable:{marginTop: "50%",height:"30%"},
  welcome:{fontSize:50,marginLeft:90,fontFamily:"AzoSans-Medium"},
  next:{width:"33.3%", height: "50%",marginLeft:"33%",resizeMode:'contain'}
});

export default NamePage;

// export default App;
// options={{
//   headerTitle: props => <LogoTitle {...props} /> ,
//   headerStyle: {
//     height: 120,
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// }}