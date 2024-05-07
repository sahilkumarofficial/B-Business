import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    
  } from "react-native";
  import { FontAwesome5 } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  import { FontAwesome } from '@expo/vector-icons';
  import { MaterialIcons } from '@expo/vector-icons';
  import { FontAwesome6 } from '@expo/vector-icons';

  
  export const Profile = () => {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#B51B75",
            paddingVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ borderRadius: 50, borderWidth: 3, borderColor: "#E65C19" }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
              }}
              style={{ width: 80, height: 80, borderRadius: 50 }}
            />
          </View>
          <View style={{ marginVertical: 15, alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 500 }}>
              Adity kumar
            </Text>
            <Text style={{ color: "white" }}>7209693299</Text>
          </View>
          <FontAwesome5
            name="edit"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "black",
            borderRadius: 10
          }}
        >
          <Ionicons name="person" size={24} color="black" />
          <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 500 }}>
            Profile
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
        
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "black", marginBottom: '5'
          }}
        >
          <FontAwesome name="shopping-cart" size={24} color="black" />
          <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 500 }}>
            Order
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "black", marginBottom: '5'
          }}
        >
          <FontAwesome name="heart" size={24} color="black" />
          <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 500 }}>
            Wishlist
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "black", marginBottom: '5'
          }}
        >
         <FontAwesome6 name="wallet" size={24} color="black" />
          <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 500 }}>
            Wallet
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "black",
            marginBottom: '5'
          }}
        >
          <FontAwesome name="share" size={24} color="black" />
          <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 500 }}>
            Share
          </Text>
        </TouchableOpacity>
  
  
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "black",
            marginBottom: '5'
          }}
        >
          <MaterialIcons name="call" size={24} color="black" />
          <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 500 }}>
            Call Order
          </Text>
        </TouchableOpacity>
  
  
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "black",
            marginBottom: '5'
          }}
        >
         <MaterialIcons name="business-center" size={24} color="black" />
          <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 500 }}>
            Start Business
          </Text>
        </TouchableOpacity>
  
  
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "black",
            marginBottom: '5'
          }}
        >
          <Ionicons name="language" size={24} color="black" />
          <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 500 }}>
            Language
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "black",
            marginBottom: '5'
          }}
        >
         <FontAwesome name="share-alt" size={24} color="black" />
          <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 500 }}>
            Refer & Earn
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            marginHorizontal: "5%",
            padding: 10,
            borderBottomWidth: 2,
            borderColor: "black",
            marginBottom: '5'
          }}
        >
         <FontAwesome name="power-off" size={24} color="red" />
          <Text style={{ marginLeft: 30, fontSize: 20, fontWeight: 500 ,color: 'red'}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  
  
  