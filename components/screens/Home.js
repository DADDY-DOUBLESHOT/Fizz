import React from "react";
import { Text,View ,SafeAreaView,StyleSheet,Modal} from "react-native";
import { ScrollView } from "react-native";
import { useState } from "react/cjs/react.development";
import Header from ".././header/Header";
import Post_Profiles from ".././Post_Profiles";
import StoryList from ".././StoryList";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Message_header from "../header/Message_header";




const Home=({navigation,route})=>{

  const [messageModel,setmessageModel]=useState(false);

  const navigateToProfile=(profile)=>{
    navigation.navigate('Profile',{profile});
  };
  const open_message=()=>{
    navigation.navigate('Message');
  }

  return(
    <SafeAreaView style={{flex:1}}>
      <Header open_message={open_message}/> 
      <ScrollView  contentContainerStyle={styles.scroll_content}>
        <StoryList/> 
        <Modal animationType="fade" visible={messageModel} transparent onRequestClose={()=>{setmessageModel(false)}}>
            <MessageOption onClicked={()=>{setmessageModel(false)}}/>
        </Modal>
        <Post_Profiles route={route} onProfileSelect={(data)=>{navigateToProfile(data)}} onOptionPress={()=>{setmessageModel(true)}}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const MessageOption=({onClicked})=>{
  return(
    <View style={styles.messageModel}>
      <View style={styles.messageModelContent}>

        <Pressable style={({pressed})=>{
            return{
              backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
              borderRadius:25/2,
            }
          }}>
            <Text style={[styles.content,{color:"red",fontWeight:"700"}]}>Report</Text>
       </Pressable>
       <Pressable style={({pressed})=>{
            return{
              backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
              borderRadius:25/2,
            }
          }}>
            <Text style={[styles.content,{color:"red",fontWeight:"700"}]}>Unfollow</Text>
      </Pressable>
      <Pressable style={({pressed})=>{
            return{
              backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
              borderRadius:25/2,
            }
          }}>    
          <Text style={styles.content}>Go to post</Text></Pressable>
          <Pressable style={({pressed})=>{
            return{
              backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
              borderRadius:25/2,
            }
          }}>
             <Text style={styles.content}>Share to...</Text>
          </Pressable>
          <Pressable style={({pressed})=>{
            return{
              backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
              borderRadius:25/2,
            }
          }}>
             <Text style={styles.content}>Copy link</Text>
          </Pressable>
          <Pressable style={({pressed})=>{
            return{
              backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
              borderRadius:25/2,
            }
          }}>
             <Text style={styles.content}>Embed</Text>
          </Pressable>
          <Pressable onPress={onClicked} style={({pressed})=>{
            return{
              backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
              borderRadius:25/2,
            }
          }}>
            <Text style={styles.content}>Cancel</Text>
          </Pressable>     

      </View>
    </View>
  );
};

const styles=StyleSheet.create({
  scroll_content:{
  },
  messageModel:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.7)',
    justifyContent:"center",
    alignItems:"center",
  },
  messageModelContent:{
    backgroundColor:"white",
    width:300,
    height:350,
    borderRadius:25/2,
    justifyContent:"center",
    alignItems:"center",
  },
  content:{
    fontSize:16,
    textAlign:"center",
    borderBottomWidth:1,
    borderBottomColor:"rgba(0,0,0,0.1)",
    paddingVertical:10,
    width:300,
    height:50,
  },

});


export default Home;