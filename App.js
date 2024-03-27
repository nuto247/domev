import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>


      <Text>Welcome to tt Earthvision!</Text>
     
      <StatusBar style="auto" />

      

     <Button
       title="About Us"
       
       onPress={() => navigation.navigate('NewPage')} // Navigate to NewPage when button is pressed
     />

<Image source={require('./assets/img/1.jpg')}></Image>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    //fontStyle: BeforeUnloadEvent,
  },
});
