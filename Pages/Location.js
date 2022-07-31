import React from "react";
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableHighlight } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
function Location(){
return(
<View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
            <View style={{ backgroundColor: '#fff', height: '7%', marginHorizontal: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ height: '100%', width: '50%', backgroundColor: '#fff', flexDirection: 'row', }}>
                    <AntDesign name="menuunfold" size={30} color="black"
                    style={{marginTop:10}}></AntDesign>
                    <Image source={require('../Images/xenticeIcon.png')}
                        style={{ marginLeft: 10 }}></Image>
                </View>
                <View style={{ height: '100%', width: '15%', backgroundColor: 'white' }}>
                    <Image source={require('../Images/avatar.png')} resizeMode='contain'
                        style={{ height: 40, width: 60 }}></Image>
                </View>

            </View>
            <View style={{ height: '10%', backgroundColor: '#9aa1b3', marginTop: 10 }}>
                <Image source={require('../Images/locationBanner.png')}
                    style={{ height: '100%', width: '100%' }}></Image>
            </View>
            <View style={{height:260, backgroundColor:'white', marginHorizontal:10, justifyContent:'space-between'}}>
                <View style={{height:60, backgroundColor:'#a8afb3', borderRadius:5}}>
                    <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10, marginTop:10, }}>India</Text>
                </View>
                <View style={{height:60, backgroundColor:'white', borderRadius:5, borderWidth:1, borderEndColor:"#a8afb3"}}>
                    <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10, marginTop:10,color:'black' }}>Kochi</Text>
                    <Text style={{fontSize:18, position:'absolute', top:-10, left:20}}>City</Text>
                </View>
                <View style={{height:60, backgroundColor:'white', borderRadius:5, borderWidth:1, borderEndColor:"#a8afb3"}}>
                    <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10, marginTop:10,color:'black' }}>Kochi</Text>
                    <Text style={{fontSize:18, position:'absolute', top:-10, left:20}}>Locality</Text>
                </View>
                <View style={{height:60, backgroundColor:'white', borderRadius:5, borderWidth:1, borderEndColor:"#a8afb3"}}>
                    <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10, marginTop:10,color:'black' }}>Kochi</Text>
                    <Text style={{fontSize:18, position:'absolute', top:-10, left:20}}>Street</Text>
                </View>

               
            </View>
            <View style={{height:200, backgroundColor:'white', marginHorizontal:10, marginTop:10}}>
            <Image source={require('../Images/Location.png')}
            style={{height:200, width:'100%'}}></Image>
            </View>
            <View style={{height:60, backgroundColor:'white', marginTop:20, marginHorizontal:10, flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableHighlight style={{height:'100%', width:150, backgroundColor:'white', borderWidth:1, borderRadius:5, borderColor:'#002db3'}}>
                <Text style={{fontSize:20, color:'#002db3', fontWeight:'bold', textAlign:'center', marginTop:10}}>Back</Text>
                </TouchableHighlight>

                <TouchableHighlight style={{height:'100%', width:150, backgroundColor:'#002db3', borderWidth:1, borderRadius:5, borderColor:'#002db3'}}>
                <Text style={{fontSize:20, color:'white', fontWeight:'bold', textAlign:'center', marginTop:10}}>Continue</Text>
                </TouchableHighlight>
                
            </View>
</View>
)

}
export default Location;
