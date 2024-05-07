import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
  } from "react-native";
 import { Shop } from "../templete/shop";
  export const Home = () => {
    return (
      <ScrollView style={{ View: 1 }}>
        <ScrollView horizontal={true}>
          <View
            style={{
              height: 125,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "gray",
              marginHorizontal: 2,
            }}
          >
            <Image
              source={{
                uri: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text>Grocery</Text>
          </View>
  
          <View
            style={{
              height: 125,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "gray",
              marginHorizontal: 2,
            }}
          >
            <Image
              source={{
                uri: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text>Grocery</Text>
          </View>
  
          <View
            style={{
              height: 125,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "gray",
              marginHorizontal: 2,
            }}
          >
            <Image
              source={{
                uri: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text>Grocery</Text>
          </View>
  
          <View
            style={{
              height: 125,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "gray",
              marginHorizontal: 2,
            }}
          >
            <Image
              source={{
                uri: "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100",
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text>Grocery</Text>
          </View>
  
          <View
            style={{
              height: 125,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "gray",
              marginHorizontal: 2,
            }}
          >
            <Image
              source={{
                uri: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text>Grocery</Text>
          </View>
        </ScrollView>
  
  <View style={{backgroundColor: "green", height: 2, marginTop:5, width: "70%", marginHorizontal: '15%'}}></View>
     
     <Shop />
      </ScrollView>
    );
  };
  