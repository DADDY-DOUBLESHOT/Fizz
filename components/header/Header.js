import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Message from '../Message';

const Header=({open_message})=>{
return(
    <View style={styles.main_container}>
       <StatusBar style={styles.statusbar} />
       <View style={styles.left_container}>
            <Image style={styles.Icon} source={require("../../assets/icon/icon.png")}/>
                <Text style={styles.Heading}>
                    FIZZ
                </Text>
       </View>
       <View style={styles.right_container}>
           <Pressable onPress={open_message}>
             <AntDesign name="message1" size={24} color="black" />
           </Pressable>
            
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
        justifyContent:"space-between"
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

export default Header;