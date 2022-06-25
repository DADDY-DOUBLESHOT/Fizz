import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';
import { FlatList,ScrollView } from 'react-native';

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
    },
    {
        id:'11',
        uri:'https://images.unsplash.com/photo-1653762371599-ba7dec5b27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'12',
        uri:'https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:'13',
        uri:'https://images.unsplash.com/photo-1653833199473-7fda1fa2abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'14',
        uri:'https://images.unsplash.com/photo-1653815946764-75c5702a9397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'15',
        uri:'https://images.unsplash.com/photo-1653763742809-98f8b759c01e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'16',
        uri:'https://images.unsplash.com/photo-1653766640097-c237ac764ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'17',
        uri:'https://images.unsplash.com/photo-1653830107226-c4d29d9497bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'18',
        uri:'https://images.unsplash.com/photo-1653479570591-3f9c60fd590e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'19',
        uri:'https://images.unsplash.com/photo-1644982652063-1a9b8d24f0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'110',
        uri:'https://images.unsplash.com/photo-1653834979224-a412b48a1b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'111',
        uri:'https://images.unsplash.com/photo-1653479572020-6ee1e8816a01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'112',
        uri:'https://images.unsplash.com/photo-1653779147343-5258e954e75d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
    ,
    {
        id:'113',
        uri:'https://images.unsplash.com/photo-1653763744306-12537eaf2a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
];

const Search=()=>{

    return (
        <View style={styles.container}>
                <View style={styles.top}>
                    <Feather name="search" size={24} color="rgba(0,0,0,0.5)" />
                    <TextInput selectionColor='grey' underlineColor='transparent' activeUnderlineColor='transparent' placeholder="Search"style={{width:300,height:30,backgroundColor:'transparent'}}></TextInput>
                </View>
                <View style={styles.bottom}>
                    <FlatList
                    data={profiles}
                    key={'_'}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={({id})=>id}
                    numColumns={3}
                    renderItem={({item})=>{
                        return (
                        <Image style={{width:100,height:100,margin:10}} source={{uri:item.uri}} />  
                        );
                    }}/>
                </View> 
        </View>
    );
};
const styles=StyleSheet.create(
    {
        container:{
            justifyContent:"center",
            alignContent:"center",
            flex:1,
            marginTop:Constants.statusBarHeight,
        },
        top:{
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            height:35,
            borderWidth:2,
            marginHorizontal:30,
            borderColor:'rgba(0,0,0,0.3)',
            marginTop:Constants.statusBarHeight+10,
            borderRadius:20/2,
        },
        bottom:{
            margin:10,
            justifyContent:"center",
            alignItems:"center",
        },
    }
);
export default Search;