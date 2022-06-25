import React from 'react';
import { View,Text ,Image,StyleSheet} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Account_header from '../header/Account_header';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Modal } from 'react-native-paper';
import ImageView from "react-native-image-viewing";

const Account=({navigation,route})=>{
    const user=route.params.user[0];
    const [grid,useGrid]=useState(true);

    const {width,height}=useWindowDimensions();
    const post_dim_w=width;
    const post_dim_h=height;
    const cancled=()=>{
        setProfileModal(!profileModal);
    }
    const [profileModal,setProfileModal]=useState(false);
    return (

        <View style={{flex:1}}>
                <Modal visible={profileModal}>
                    <MessageOption onClicked={cancled}/>
                </Modal>
                <View style={{zIndex:-1}}>
                    <Account_header name={user} />
                    
                    <ScrollView minimumZoomScale={1}
                                    maximumZoomScale={5}>
                        <View style={{flexDirection:"row",marginVertical:5,padding:10}}>
                            <Image  style={{width:70,height:70,borderRadius:35}}source={{uri:user.profile}}/>
                            <View style={{flex:1,paddingHorizontal:30,marginTop:5}}>
                                <View style={{flexDirection:"row",alignItems:"center",padding:5}}>
                                    <Text style={{fontWeight:"700",textAlign:"center"}}>{user.user_id}</Text>
                                    <Pressable style={{marginLeft:10}} onPress={cancled}>
                                        <Ionicons name="settings-outline" size={24} color="black" />
                                    </Pressable>
                                </View>
                                <Pressable >
                                    <Text  style={{textAlign:"center",paddingHorizontal:10,paddingVertical:5,borderRadius:5,borderWidth:0.3,fontWeight:"700",color:"rgba(0,0,0,0.7)"}}>
                                        Edit Profile
                                    </Text>
                                </Pressable>
                            </View>                
                        </View>
                        <View style={styles.descContent}>
                            <Text style={{fontWeight:"700"}}>
                                {user.name}
                            </Text>
                            <Text style={{fontWeight:"500",color:"rgba(0,0,0,0.3)"}}>
                                Personal Blog
                            </Text>
                            <Text style={{}}>
                                {user.location}
                            </Text>
                        </View>
                        <View style={styles.bottomContent}>
                            <View style={{justifyContent:"center",alignContent:"center"}}>
                                <Text style={{textAlign:"center"}}>{user.posts.length}</Text>
                                <Text>posts</Text>
                            </View>
                            <View style={{justifyContent:"center",alignContent:"center"}}>
                                <Text style={{textAlign:"center"}}>{Math.floor(Math.random()*1000)+user.posts.length}</Text>
                                <Text>followers</Text>
                            </View>
                            <View style={{justifyContent:"center",alignContent:"center"}}>
                                <Text style={{textAlign:"center"}}>{Math.floor(Math.random()*100)+user.posts.length}</Text>
                                <Text>following</Text>
                            </View>
                        </View>
                        <View style={styles.post_content}>
                            <View style={{flexDirection:"row",justifyContent:"space-evenly",margin:10}}>
                                <MaterialIcons onPress={()=>{useGrid(true)}} name="grid-on" size={24} color={grid?"#2196F3":"rgba(0,0,0,0.9)"} />
                                <MaterialIcons onPress={()=>{useGrid(false)}}name="inbox" size={24} color={grid?"rgba(0,0,0,0.9)":"#2196F3"} />
                            </View>
                            {
                                grid?
                                <FlatList
                                data={user.posts}
                                keyExtractor={(item)=>item.id}
                                numColumns={3}
                                key={'_'}
                                renderItem={({item})=>{
                                    return <Image style={[styles.post_image,{width:post_dim_w/3-20,height:post_dim_w/3-20}]} source={{uri:item.post}} />
                                }}
                                />:<FlatList
                                    
                                    data={user.posts}
                                    keyExtractor={(item)=>item.id}
                                    renderItem={({item})=>{
                                        return (
                                        <View>
                                            <Image style={[styles.post_image2,{width:post_dim_w,height:post_dim_h-50}]} source={{uri:item.post}} />
                                            <View style={styles.profile_bottom}>
                                            <View style={styles.profile_bottom_left}>
                                                <AntDesign style={styles.actions} name="hearto" size={24} color="black" />
                                                <Feather style={styles.actions} name="message-circle" size={24} color="black" />
                                                <Feather style={styles.actions} name="send" size={24} color="black" />
                                            </View>
                                            <View style={styles.profile_bottom_right}>
                                                <Feather name="bookmark" size={24} color="black" />
                                            </View>        
                                        </View>
                                        </View>)
                                
                                }}
                                />
                            }
                        </View>
                    </ScrollView>

                </View>
               
        </View>
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
                <Text style={styles.content}>Change password</Text>
            </Pressable>
            <Pressable style={({pressed})=>{
                return{
                    backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
                    borderRadius:25/2,
                }
                }}>
                <Text style={styles.content}>Professional account</Text>
            </Pressable>
            <Pressable style={({pressed})=>{
                return{
                    backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
                    borderRadius:25/2,
                }
                }}>
                <Text style={styles.content}>QR Code</Text>
            </Pressable>
            <Pressable style={({pressed})=>{
                return{
                    backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
                    borderRadius:25/2,
                }
                }}>
                <Text style={styles.content}>Apps and Websites</Text>
            </Pressable>
            <Pressable style={({pressed})=>{
                return{
                    backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
                    borderRadius:25/2,
                }
                }}>
                <Text style={styles.content}>Notifications</Text>
            </Pressable>
            <Pressable style={({pressed})=>{
                return{
                    backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
                    borderRadius:25/2,
                }
                }}>
                <Text style={styles.content}>Privacy and Security</Text>
            </Pressable>
            <Pressable style={({pressed})=>{
                return{
                    backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
                    borderRadius:25/2,
                }
                }}>
                <Text style={styles.content}>Login activity</Text>
            </Pressable>
            <Pressable style={({pressed})=>{
                return{
                    backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
                    borderRadius:25/2,
                }
                }}>
                <Text style={styles.content}>Emails from Instagram</Text>
            </Pressable>
            <Pressable style={({pressed})=>{
                return{
                    backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
                    borderRadius:25/2,
                }
                }}>
                <Text style={styles.content}>Report a Problem</Text>
            </Pressable>
            <Pressable style={({pressed})=>{
                return{
                    backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
                    borderRadius:25/2,
                }
                }}>
                <Text style={styles.content}>Embed</Text>
            </Pressable>
            <Pressable style={({pressed})=>{
                return{
                    backgroundColor:pressed?"rgba(0,0,0,0.1)":"white",
                    borderRadius:25/2,
                }
                }}>
                <Text style={styles.content}>Log Out</Text>
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
    descContent:{
        marginVertical:10,
        marginLeft:10,
    },
    bottomContent:{
        flexDirection:"row",
        height:70,
        borderColor:'rgba(0,0,0,0.3)',
        borderTopWidth:1,
        borderBottomWidth:1,
        justifyContent:"space-evenly",

    },
    post_content:{
     
    },
    post_image:{
        justifyContent:"center",
        alignItems:"center",
        margin:10
        
    },
    post_image2:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5,
        
    },
    profile_bottom:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
        marginVertical:5,

    },
    profile_bottom_left:{
        flexDirection:"row"

    },
    profile_bottom_right:{
        flexDirection:"row"

    },
    actions:{
        marginHorizontal:7,
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
        height:480,
        borderRadius:25/2,
        justifyContent:"center",
        alignItems:"center",
      },
      content:{
        fontSize:14,
        textAlign:"center",
        borderBottomWidth:1,
        borderBottomColor:"rgba(0,0,0,0.1)",
        paddingVertical:10,
        width:300,
        height:40,
        fontWeight:"300"
      },
});
export default Account;