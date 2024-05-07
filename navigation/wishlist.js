import { View, Text, ScrollView ,Image,TouchableOpacity} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
export const Wishlist =()=>{
    return<ScrollView style={{flex:1}}>
       <View
       style={{ borderRadius: 10,
        borderColor: "#E65C19",
        borderWidth: 2,}}>
       <View
          style={{
            height: 150,
            width: "98%",
          flexDirection: 'row',
           alignItems: 'center'
         
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1562704480-bacc35380666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaG9ufGVufDB8fDB8fHww",
            }}
            style={{ width: "50%", height: 120, borderRadius: 10  }}
          />
         <View>
         <Text style={{fontWeight:600}}>Aditya kirana store</Text>
          <View style={{flexDirection: 'row', marginTop: 3}}>
          <MaterialIcons name="location-pin" size={20} color="black" />
            <Text style={{overflow: 'hidden'}}>machili market ramcha ndrapur, biharsharif</Text>
            
            
            </View>
           
           <View style={{flexDirection: 'row', width: 120}}>
           <TouchableOpacity 
            style={{height: 35, backgroundColor: '#B51B75',width: '70%',borderRadius:10, alignItems: 'center'}}>
<Text style={{color:'white', fontWeight: 600, padding:5}}>Visit Us</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{height: 35,width: '70%',borderRadius:10, alignItems: 'center', padding: 5, marginHorizontal: 8}}>
<MaterialIcons name="delete" size={24} color="#E65C19" />
            </TouchableOpacity>
           </View>

        </View>
         </View>
      
       </View>
      
    </ScrollView>
}