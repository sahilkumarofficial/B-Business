
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Category } from './navigation/category';

import { Wishlist } from './navigation/wishlist';
import { Home } from './navigation/home';
import { ProfileStack } from './profilestack';






const Tab = createBottomTabNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" size={24} color="#E65C19" />
            ),
           
            
            headerTitle: () => (
              <View
                style={{
                  backgroundColor: "#E65C19",
                  padding: 5,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "white", fontWeight: 600 }}>803110</Text>
              </View>
            ),
            headerRight: () => (
              <View
                style={{
                  paddingHorizontal: 0,
                  borderRadius: 5,
                  width: "45%",
                  flexDirection: "row",
                }}
              >
                <FontAwesome5 name="search" size={24} color="#E65C19" />
                <Ionicons
                  name="notifications"
                  size={24}
                  color="#E65C19"
                  style={{ paddingHorizontal: 20 }}
                />
               <FontAwesome name="cart-arrow-down" size={24} color="#E65C19" />
              </View>
            ),
            title: "",
            headerStyle: { backgroundColor: "yellow" },
          }}
        />



<Tab.Screen name="Category" component={Category} 
        
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="category" size={24} color="#E65C19" />
          ),
          headerStyle: { backgroundColor: "yellow" },
       
        }}
        
        />


{/* Wishlist is here */}
<Tab.Screen name="Wishlist" component={Wishlist} 
        
        options={{
          tabBarIcon: () => (
            <FontAwesome name="heart" size={24} color="#E65C19" />
          ),
          headerStyle: { backgroundColor: "yellow" },
          
        }}
        
        />
 
 <Tab.Screen name="ProfileStack" component={ProfileStack}
        
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color="#E65C19" />
          ),
          headerStyle: { backgroundColor: "yellow" },
          
        }}
        />




    </Tab.Navigator>
   </NavigationContainer>
  );
}




export default App;



