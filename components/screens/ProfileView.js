import React from 'react';
import { View,Text,Image ,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';


const ProfileView=({route})=>{
    
    const name=route.params.profile.name;
    const profile=route.params.profile.profile;
    const location=route.params.profile.location;
    const posts=route.params.profile.posts;
    const [grid,useGrid]=useState(true);
    return(
        <SafeAreaView >
            <ScrollView >
            <View style={styles.profileMain}>
                <View style={styles.profile_bg}>
                    <Image style={styles.profile}source={{uri:profile}}/>
                </View>
                <View style={styles.profileMainRight}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginHorizontal:30}}>{name}</Text>
                        <Entypo style={{marginHorizontal:30}} name="dots-three-horizontal" size={24} color="black" />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                        <View style={{width:150,height:35,borderWidth:2,borderColor:'rgba(0,0,0,0.2)',justifyContent:"center",alignItems:"center",marginHorizontal:10}}>
                            <Text>Message</Text>
                        </View>
                        <FontAwesome5 style={{width:40,height:35,marginHorizontal:10}}name="user-alt" size={24} color="black" />
                        <MaterialIcons style={{width:40,height:35,marginHorizontal:10}}name="keyboard-arrow-down" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View style={styles.descContent}>
                <Text style={{fontWeight:"700"}}>
                    {name}
                </Text>
                <Text style={{fontWeight:"500",color:"rgba(0,0,0,0.3)"}}>
                    Personal Blog
                </Text>
                <Text style={{}}>
                    {location}
                </Text>
            </View>
            <View style={styles.bottomContent}>
                <View style={{justifyContent:"center",alignContent:"center"}}>
                    <Text style={{textAlign:"center"}}>{posts.length}</Text>
                    <Text>posts</Text>
                </View>
                <View style={{justifyContent:"center",alignContent:"center"}}>
                    <Text style={{textAlign:"center"}}>{Math.floor(Math.random()*1000)+posts.length}</Text>
                    <Text>followers</Text>
                </View> 
                <View style={{justifyContent:"center",alignContent:"center"}}>
                    <Text style={{textAlign:"center"}}>{Math.floor(Math.random()*100)+posts.length}</Text>
                    <Text>following</Text>
                </View>
            </View>
            <View style={styles.post_content}>
                <View style={{flexDirection:"row",justifyContent:"space-evenly",margin:10}}>
                    <MaterialIcons onPress={()=>{useGrid(true)}} name="grid-on" size={24} color={grid?"#2196F3":"rgba(0,0,0,0.9)"} />
                    <MaterialIcons onPress={()=>{useGrid(false)}}name="inbox" size={24} color={grid?"rgba(0,0,0,0.9)":"#2196F3"} />
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{alignContent:"center",flexDirection:grid?"row":"column"}}>
                        {posts.map((item)=>(
                            <Image style={{alignContent:"center",marginHorizontal:grid?20:0,marginVertical:grid?0:10,width:grid?100:400,height:grid?100:300}} key={item.id}source={{uri:item.post}}></Image>
                        ))}
                    </View>
                </ScrollView>
            </View>
            </ScrollView>

        </SafeAreaView>
    );
};


const styles=StyleSheet.create({
    profileMain:{
        flexDirection:"row",
        margin:5,
    },
    profileMainRight:{

        justifyContent:"space-between",
        marginVertical:15,

    },
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
        flex:1,
    },
    profile_bg:{
        width:100,
        height:100,
        borderRadius:100/2,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:3,
        borderColor:"#1384DE",

    },
    profile:{
        width:90,
        height:90,
        borderRadius:98/2,
    }

});

export default ProfileView;