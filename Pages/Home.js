import React from "react";
import { StyleSheet, View, Text, Image, TextInput, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicicons from "react-native-vector-icons/Ionicons";


function Home() {
    return (
        <ScrollView>
        <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
            <View style={{ backgroundColor: '#fff', height: '5%', marginHorizontal: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ height: '100%', width: '50%', backgroundColor: '#fff', flexDirection: 'row', }}>
                    <AntDesign name="menuunfold" size={34} color="black"
                    style={{marginTop:10}}></AntDesign>
                    <Image source={require('../Images/xenticeIcon.png')}
                        style={{ marginLeft: 10 }}></Image>
                </View>
                <View style={{ height: '100%', width: '15%', backgroundColor: 'white' }}>
                    <Image source={require('../Images/avatar.png')} resizeMode='contain'
                        style={{ height: 40, width: 60 }}></Image>
                </View>

            </View>
            <View style={{ height: '9%', backgroundColor: 'white', marginTop: 40, marginHorizontal: 10 }}>
                <TextInput placeholder='Search'
                    style={{ height: '60%', width: '100%', borderRadius: 10, borderWidth: 1, borderColor:'#808080', paddingLeft: 70 }}></TextInput>
                <EvilIcons name='search' size={24} color="black"
                    style={{ position: 'absolute', top: 10, left: 10 }}></EvilIcons>

            </View>
            <View style={{ height: '7%', backgroundColor: 'white', marginHorizontal: 10, marginTop: 1, flexDirection: 'row' }}>
                <View style={{ height: '100%', width: 84, backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor:'#808080' }}>
                    <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 10, color: 'black', fontWeight: 'bold' }}>Property</Text>
                </View>
                <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 10, color: 'black', }}>Services</Text>

            </View>
            <View style={{ height: 90, backgroundColor: 'white', marginTop: 10, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:20}}></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:20}}></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth: 1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:20}}></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
                <View style={{ height: '100%', width: 90, backgroundColor: 'white', borderRadius: 10, borderColor: '#808080', borderWidth:1 }}>
                    <AntDesign name='dropbox' size={34} color='black'
                    style={{marginLeft:20}}></AntDesign>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Indistrial Land</Text>
                </View>
            </View>

            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 10, marginLeft: 10 }}>Commercial Office</Text>
            <View style={{ height: 140, backgroundColor: 'white', marginHorizontal: 10, flexDirection: "row", justifyContent:'space-between'}}>
                <View style={{ height: '100%', width: 180, backgroundColor: 'white', borderWidth: 1, borderRadius: 5, borderColor:'#808080' }}>
                    <Image source={require('../Images/office.jpeg')}
                        style={{ height: '70%', width: '100%', borderRadius: 10, }}></Image>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontWeight: '400' }}> Woxro Office</Text>
                        <Text style={{ color: 'red', fontWeight: '500' }}>Rs.2500/Hr</Text>
                    </View>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row' }}>
                        <Ionicicons name='location' size={15} color='green'></Ionicicons>
                        <Text style={{ marginLeft: 10, color: 'black' }}>Trissur</Text>
                    </View>


                </View>


                <View style={{ height: '100%', width: 200, backgroundColor: 'white', marginHorizontal: 5, borderWidth: 1, borderRadius: 5, borderColor:'#808080' }}>
                    <Image source={require('../Images/office.jpeg')}
                        style={{ height: '70%', width: '100%', borderRadius: 10, }}></Image>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontWeight: '400' }}> Woxro Office</Text>
                        <Text style={{ color: 'red', fontWeight: '500' }}>Rs.2500/Hr</Text>
                    </View>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row' }}>
                        <Ionicicons name='location' size={15} color='green'></Ionicicons>
                        <Text style={{ marginLeft: 10, color: 'black' }}>Trissur</Text>
                    </View>


                </View>

            </View>

            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 10, marginLeft: 10 }}>Commercial Office</Text>
            <View style={{ height: 140, backgroundColor: 'white', marginHorizontal: 10, flexDirection: "row", }}>
                <View style={{ height: '100%', width: 180, backgroundColor: 'white', borderWidth: 1, borderRadius: 5, borderColor:'#808080' }}>
                    <Image source={require('../Images/office.jpeg')}
                        style={{ height: '70%', width: '100%', borderRadius: 10, }}></Image>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontWeight: '400' }}> Woxro Office</Text>
                        <Text style={{ color: 'red', fontWeight: '500' }}>Rs.2500/Hr</Text>
                    </View>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row' }}>
                        <Ionicicons name='location' size={15} color='green'></Ionicicons>
                        <Text style={{ marginLeft: 10, color: 'black' }}>Trissur</Text>
                    </View>


                </View>


                <View style={{ height: '100%', width: 200, backgroundColor: 'white', marginHorizontal: 5, borderWidth: 1, borderRadius: 5, borderColor:'#808080' }}>
                    <Image source={require('../Images/office.jpeg')}
                        style={{ height: '70%', width: '100%', borderRadius: 10, }}></Image>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontWeight: '400' }}> Woxro Office</Text>
                        <Text style={{ color: 'red', fontWeight: '500' }}>Rs.2500/Hr</Text>
                    </View>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row' }}>
                        <Ionicicons name='location' size={15} color='green'></Ionicicons>
                        <Text style={{ marginLeft: 10, color: 'black' }}>Trissur</Text>
                    </View>


                </View>
                

            </View>
            
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginTop: 10, marginLeft: 10 }}>Commercial Office</Text>
            <View style={{ height: 140, backgroundColor: 'white', marginHorizontal: 10, flexDirection: "row", }}>
                <View style={{ height: '100%', width: 180, backgroundColor: 'white', borderWidth: 1, borderRadius: 5, borderColor:'#808080' }}>
                    <Image source={require('../Images/office.jpeg')}
                        style={{ height: '70%', width: '100%', borderRadius: 10, }}></Image>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontWeight: '400' }}> Woxro Office</Text>
                        <Text style={{ color: 'red', fontWeight: '500' }}>Rs.2500/Hr</Text>
                    </View>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row' }}>
                        <Ionicicons name='location' size={15} color='green'></Ionicicons>
                        <Text style={{ marginLeft: 10, color: 'black' }}>Trissur</Text>
                    </View>


                </View>


                <View style={{ height: '100%', width: 200, backgroundColor: 'white', marginHorizontal: 5, borderWidth: 1, borderRadius: 5, borderColor:'#808080' }}>
                    <Image source={require('../Images/office.jpeg')}
                        style={{ height: '70%', width: '100%', borderRadius: 10, }}></Image>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontWeight: '400' }}> Woxro Office</Text>
                        <Text style={{ color: 'red', fontWeight: '500' }}>Rs.2500/Hr</Text>
                    </View>
                    <View style={{ height: 20, backgroundColor: 'white', flexDirection: 'row' }}>
                        <Ionicicons name='location' size={15} color='green'></Ionicicons>
                        <Text style={{ marginLeft: 10, color: 'black' }}>Trissur</Text>
                    </View>


                </View>
                

            </View>

            


        </View>
        </ScrollView>
    )
}
export default Home;