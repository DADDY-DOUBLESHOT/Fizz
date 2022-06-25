import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Account_header=({name,backbtn})=>{

return(
    <View style={styles.main_container}>
       <StatusBar style={styles.statusbar} />
       <View style={styles.left_container}>
            <Pressable onPress={backbtn}>
            <Ionicons name="settings-outline" size={24} color="black" />
            </Pressable>
       </View>
       <View style={styles.right_container}>
            <Text style={{fontWeight:"700"}}>{name.user_id}</Text>
           <MaterialIcons  name="keyboard-arrow-down" size={24} color="black" /> 
       </View>
       <View style={styles.right_container}>
            <AntDesign name="adduser" size={24} color="black" />
       </View>
        
    </View>
);
};

const styles=StyleSheet.create({
    Heading:{
        fontWeight:"bold",
        textAlign:"center",
        margin:0,
        fontSize:20,
    },
    Icon:{
        
        width:30,
        height:30,
    },
    statusbar:{
       
    },
    main_container:{
        paddingTop:Constants.statusBarHeight,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:0.5,
        borderColor:"rgba(0,0,0,0.5)"
    },
    left_container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
    },
    right_container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
    },
});

export default Account_header;