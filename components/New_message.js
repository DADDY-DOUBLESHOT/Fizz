import React, { useState } from 'react';
import { View,Text,Image, Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




const New_message=({name})=>{
    const [selected,add]=useState([]);
    
    
    return (
        <View>
            <View style={{flexDirection:"row",padding:5,borderBottomWidth:0.3,borderBottomColor:"rgba(0,0,0,0.5)"}}>
                <Text style={{margin:10}}>To:</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                {
                    selected.map((item,key)=>(
                       <Text key={key} style={{backgroundColor:"rgba(0,149,246,0.3)",color:"rgba(0,149,246,1)",fontWeight:"400",padding:3,borderRadius:5,marginRight:5}}>{item}</Text>
                    ))
                }
                </View>
                <TextInput style={{marginLeft:5}} placeholder='Search...' placeholderTextColor={"rgba(0,0,0,0.4)"}></TextInput>
            </View>
            <ScrollView>

                <View style={{padding:10}}>
                    {
                        name.friends.map((item,key)=>(
                    
                            <Pressable key={key} onPress={(pressed)=>{add([...selected,item.name])} } style={{flexDirection:"row",marginVertical:5,justifyContent:"space-between",alignItems:"center"}}>
                                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                    <Image  style={{width:70,height:70,borderRadius:35}}source={{uri:item.profile}}/>
                                    <View style={{padding:10}}>
                                        <Text style={{fontWeight:"700"}}>{item.name}</Text>
                                    </View>
                                </View>
                                {/* <MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="#0095f6" /> */}
                                <Feather name="circle" size={24} color="rgba(0,0,0,0.5)" />
                            </Pressable>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    );
};
export default New_message;