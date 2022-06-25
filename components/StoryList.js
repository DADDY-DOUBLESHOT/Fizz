import React from 'react';
import { View, ScrollView ,StyleSheet,Image,Text} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const profiles=[
    {
        id:'1',
        uri:'https://images.unsplash.com/photo-1653762371599-ba7dec5b27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'2',
        uri:'https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'3',
        uri:'https://images.unsplash.com/photo-1653833199473-7fda1fa2abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'4',
        uri:'https://images.unsplash.com/photo-1653815946764-75c5702a9397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'5',
        uri:'https://images.unsplash.com/photo-1653763742809-98f8b759c01e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'6',
        uri:'https://images.unsplash.com/photo-1653766640097-c237ac764ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'7',
        uri:'https://images.unsplash.com/photo-1653830107226-c4d29d9497bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'8',
        uri:'https://images.unsplash.com/photo-1653479570591-3f9c60fd590e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'9',
        uri:'https://images.unsplash.com/photo-1644982652063-1a9b8d24f0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'10',
        uri:'https://images.unsplash.com/photo-1653834979224-a412b48a1b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'11',
        uri:'https://images.unsplash.com/photo-1653479572020-6ee1e8816a01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'12',
        uri:'https://images.unsplash.com/photo-1653779147343-5258e954e75d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'13',
        uri:'https://images.unsplash.com/photo-1653763744306-12537eaf2a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
];

const StoryList=()=>{
    return (
        <View style={styles.story_list}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.main_list}>
            <View style={styles.p_story}>
                <Image style={styles.profile} source={{uri:'https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'}}/>
                <View style={styles.p_plus}>
                    <Entypo name="circle-with-plus" style={styles.p_profile} size={24} color="#ff397c" />
                </View>
            </View>
                {profiles.map(({id,uri})=>(
                    <Story key={id} data={uri}/>
                ))}
            </ScrollView>
        </View>
    );
};

const Story=({data})=>{

    return(
            <View style={styles.story}>
                <Image style={styles.profile} source={{uri:data}}/>
            </View>
    );
};



const styles=StyleSheet.create({
    main_list:{
        backgroundColor:"white",
        borderColor:"grey",
        borderRadius:5,
        borderTopWidth:0.3,
        borderBottomWidth:0.3,
        paddingTop:5,
        height:90,
    },
    story_list:{
        justifyContent:"center",
        alignContent:"center",
        margin:5,
        flexDirection:"row",
    },
    story:{
        backgroundColor:"#dc87a4",
        width:75,
        height:75,
        borderRadius:75/2,
        justifyContent:"center",
        alignItems:"center",   
        marginRight:4, 
    },
    p_story:{
        backgroundColor:"#1384DE",
        width:75,
        height:75,
        borderRadius:75/2,
        justifyContent:"center",
        alignItems:"center",   
        marginRight:4, 
    },
    profile:{
        width:"90%",
        height:"90%",
        borderRadius:70/2,
    },
    p_profile:{
        position:"absolute",
        backgroundColor:"white",
        bottom:2,
        left:12,
        width:25,
        height:25,
        borderRadius:25/2,
    },
    p_plus:{
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",   
        marginRight:4, 
        position:"relative",
    }
});
export default StoryList;

