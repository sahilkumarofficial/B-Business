import { ScrollView, View, Text, Image, TextInput } from "react-native";

export const Editprofile = () => {
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
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              borderRadius: 50,
              borderWidth: 3,
              borderColor: "#E65C19",
            }}
          />
          <View
            style={{ backgroundColor: "#E65C19", height: 50, width: 100 }}
          ></View>
        </View>
      </View>
      {/* Basic informations */}

      <View
        style={{
          height: 50,
          width: "80%",
          alignItems: "center",
          borderBottomColor: "red",
          borderBottomWidth: 2,
          marginHorizontal: "10%",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 500 }}>
          Basic Informations
        </Text>
      </View>
      <View style={{marginHorizontal: '10%',marginTop:10,alignItems: 'center'}}><TextInput
        placeholder="Aditya kumar"
        placeholderTextColor={'black'}
        style={{
          borderColor: "gray",
          borderBottomWidth: 3,
          alignContent: 'center',
          width: "80%",
          alignItems: "center",
          fontWeight: 600,
        }}
      /></View>
    </ScrollView>
  );
};
