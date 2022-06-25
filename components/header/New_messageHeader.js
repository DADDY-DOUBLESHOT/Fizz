import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';
import Constants from 'expo-constants';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Ionicons } from '@expo/vector-icons';

const New_messageHeader=({messageModal})=>{

return(
    <View style={styles.main_container}>
       <StatusBar style={styles.statusbar} />
       <View style={styles.left_container}>
            <Pressable onPress={messageModal}>
                <Ionicons name="chevron-back" size={30} color="black" />
            </Pressable>
       </View>
       <View style={styles.right_container}>
            <Text style={{fontWeight:"700",textAlign:"center"}}>New Message</Text>
       </View>
       <Pressable style={styles.right_container}>
            <Text style={{fontWeight:"700",color:"#0095f6",textAlign:"center"}}>Next</Text>
       </Pressable>
        
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
        padding:10,
        justifyContent:"center",
    },
    next:{

    }
});

export default New_messageHeader;