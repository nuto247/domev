import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your ggg  app!</Text>
      <StatusBar style="auto" />

     <Button
       title="Go to New Page"
       onPress={() => navigation.navigate('NewPage')} // Navigate to NewPage when button is pressed
     />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
