import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableHighlight } from "react-native";

function Details() {
    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
            <View style={{ backgroundColor: '#fff', height: '6%', marginHorizontal: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
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

            <View style={{ height: '10%', backgroundColor: '#9aa1b3', marginTop: 20 }}>
                <Image source={require('../Images/Banner.png')}
                    style={{ height: '100%', width: '100%' }}></Image>
            </View>


            <View style={{ height: 85, backgroundColor: 'white', marginTop: 10, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:25}} ></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
                <View style={{ height: '100%', width: 90, backgroundColor: '#001d76', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='white'
                    style={{marginLeft:25}} ></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>Indistrial Land</Text>
                </View>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:25}} ></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:25}} ></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
            </View>
            <View style={{ height: 85, backgroundColor: 'white', marginTop: 10, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:25}} ></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:25}} ></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:25}} ></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:25}} ></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
            </View>

            <View style={{ height: 85, backgroundColor: 'white', marginTop: 10, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:25}} ></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
            </View>

            <View style={{ height: '8%', backgroundColor: 'white', marginHorizontal: 10, borderRadius: 10, borderWidth: 1, marginTop: 10 }}>
                <Text style={{ marginTop: 15, fontSize: 15, marginLeft: 10, color: 'black' }}>Woxro Office</Text>
                <Text style={{ position: 'absolute', top: -13, fontSize: 15, left: 15 }}>Property Title</Text>
            </View>
            <Text style={{ marginLeft: 15, top: 15, fontSize: 20 }}>Transaction Type</Text>
            <View style={{ height: '4%', backgroundColor: 'white', marginTop: 20, flexDirection: 'row', marginHorizontal: 10 }}>
                <View style={{ height: '100%', width: 30, borderRadius: 12, borderWidth: 2, borderColor: '#000', alignItems: 'center', justifyContent: 'center', backgroundColor: '#001d76' }}></View>
                <View style={{ width: 60 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginLeft: 5 }}>Sell</Text>
                </View>
                <View style={{ height: '100%', width: 30, borderRadius: 12, borderWidth: 2, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}></View>
                <View style={{ width: 60, }}>
                    <Text style={{ fontSize: 20, color: 'black', marginLeft: 5 }}>Rent</Text>
                </View>
                <View style={{ height: '100%', width: 30, borderRadius: 12, borderWidth: 2, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}></View>
                <View style={{ width: 60, }}>
                    <Text style={{ fontSize: 20, color: 'black', marginLeft: 5 }}>Lease</Text>
                </View>


            </View>

            <View style={{height:'7%', backgroundColor:'white', flexDirection:'row', marginHorizontal:10, marginTop:10}}>
            <View style={{ height: 40, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, marginTop: 5, width:'60%' }}>
                <Text style={{ marginTop: 15, fontSize: 15, marginLeft: 10, color: 'black' }}>2500</Text>
                <Text style={{ position: 'absolute', top: -13, fontSize: 15, left: 15 }}>Price</Text>
            </View>
            <View style={{ height: 40, backgroundColor: 'white', marginHorizontal: 10, borderRadius: 10, borderWidth: 1, marginTop: 5, width:'35%' }}>
            <Text style={{ marginTop: 15, fontSize: 15, marginLeft: 10, color: 'black' }}>/Hr</Text>
            </View>
            </View>
            <View style={{height:'7%', backgroundColor:'white', flexDirection:'row', marginHorizontal:10, marginTop:5}}>
            <View style={{ height: 40, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, marginTop: 10, width:'60%' }}>
                <Text style={{ marginTop: 15, fontSize: 15, marginLeft: 10, color: 'black' }}>2500</Text>
                <Text style={{ position: 'absolute', top: -13, fontSize: 15, left: 15 }}>Price</Text>
            </View>
            <View style={{ height: 40, backgroundColor: 'white', marginHorizontal: 10, borderRadius: 10, borderWidth: 1, marginTop: 5, width:'35%' }}>
            <Text style={{ marginTop: 15, fontSize: 15, marginLeft: 10, color: 'black' }}>/Hr</Text>
            </View>
            </View>
            <View style={{height:'7%', backgroundColor:'white', flexDirection:'row', marginHorizontal:10, marginTop:5}}>
            <View style={{ height: 40, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, marginTop: 5, width:'60%' }}>
                <Text style={{ marginTop: 15, fontSize: 15, marginLeft: 10, color: 'black' }}>2500</Text>
                <Text style={{ position: 'absolute', top: -13, fontSize: 15, left: 15 }}>Price</Text>
            </View>
            <View style={{ height: 40, backgroundColor: 'white', marginHorizontal: 10, borderRadius: 10, borderWidth: 1, marginTop: 5, width:'35%' }}>
            <Text style={{ marginTop: 15, fontSize: 15, marginLeft: 10, color: 'black' }}>/Hr</Text>
            </View>
            </View>

            

        </View>
    )
}
export default Details;