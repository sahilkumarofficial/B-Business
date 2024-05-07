import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Profile } from './navigation/profile';
import { Editprofile } from './profilecontiner/editprofile';

const Stack = createStackNavigator();
export const ProfileStack = () => {
    return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Profile" component={Profile} />
 
   <Stack.Screen name="Settings" component={Settings} />
   <Stack.Screen name="Settings1" component={Settings1} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const Home = (props) =>{
  return(
    <Button title='go to Notificaion' onPress={()=> props.navigation.navigate("Notifications")} />
   
  )
}
const Notifications = (props) =>{
  return(
    <Button title='go to Setting' onPress={()=> props.navigation.navigate("Settings")} />
  )
}
const Settings1 = () =>{
  return(
    <Text>
      Settings1 page
    </Text>
  )
}

const Settings = () =>{
  return(
    <Text>
      Settings page
    </Text>
  )
}


export default function App() {
    return (
      <NavigationContainer>
        <ProfileStack />
      </NavigationContainer>
    );
  }