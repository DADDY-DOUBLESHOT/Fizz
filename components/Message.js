import React, { useState } from 'react';
import { View,Text,Image } from 'react-native';
import { ScrollView } from 'react-native';
import { Modal } from 'react-native';
import Message_header from './header/Message_header';
import New_messageHeader from './header/New_messageHeader';
import New_message from './New_message';




const Message=({navigation,route})=>{
    const user=route.params.user[0];
    const friends=route.params.user[0].friends;
    const [message_modal,setMessage_Modal]=useState(false);
    const backtohome=()=>{
     navigation.navigate('Home');   
    }
    const showMessage=()=>{
        setMessage_Modal(!message_modal);
    }
    return (
        <View>
            <Message_header backbtn={backtohome} messageModal={showMessage} name={user}/>
            <ScrollView>
                <View style={{padding:10}}>
                    {
                        friends.map((item,key)=>(
                            <View key={key} style={{flexDirection:"row",marginVertical:5}}>
                                <Image  style={{width:70,height:70,borderRadius:35}}source={{uri:item.profile}}/>
                                <View style={{padding:10}}>
                                    <Text style={{fontWeight:"700"}}>{item.name}</Text>
                                    <Text>{item.message}</Text>
                                </View>
                                
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            <Modal visible={message_modal}>
                <New_messageHeader messageModal={showMessage} />
                <New_message name={user}/>
            </Modal>
        </View>
    );
};
export default Message;