import React,{useRef,useState} from 'react';
import { StyleSheet ,View,Image,Text,Pressable} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { FlatList } from 'react-native';



const post_profiles=[
    {
        id:'1',
        name:'Trisha Roy',
        location:'San Fransico',
        profile:'https://images.unsplash.com/photo-1653762371599-ba7dec5b27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        posts:[
            {
                id:'1',
                post:'https://images.unsplash.com/photo-1653875820123-57ef7fee853f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'2',
                post:'https://images.unsplash.com/photo-1653875819913-aad3291afe04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'3',
                post:'https://images.unsplash.com/photo-1653875819896-7ac31ed349c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'4',
                post:'https://images.unsplash.com/photo-1653875819896-c6814a1d465d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
        ],
    },

    {
        id:'2',
        name:'Daisy Shaw',
        location:'Mumbai India',
        profile:'https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        posts:[
            {
                id:'1',
                post:'https://images.unsplash.com/photo-1653878598109-bf82a2cc86af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'2',
                post:'https://images.unsplash.com/photo-1629733249383-5d963b5f7464?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            },
        ],
    },
    {
        id:'3',
        name:'Hamid Tajik',
        location:'New Delhi, India',
        profile:'https://images.unsplash.com/photo-1653833199473-7fda1fa2abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
       
        posts:[
            {
                id:'1',
                post:'https://images.unsplash.com/photo-1653828576037-f7c4d734c6b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'2',
                post:'https://media.istockphoto.com/photos/beautiful-young-bride-at-sunset-in-green-nature-picture-id941749300?k=20&m=941749300&s=170667a&w=0&h=Heyy6-KHxjY-MHPZP0eoOM8s7kHI2ZbktQe6KS5SbTI=',
            },
            {
                id:'3',
                post:'https://media.istockphoto.com/photos/life-is-beautiful-picture-id1162713253?k=20&m=1162713253&s=170667a&w=0&h=eUKfD17fcPu5A0hpzlP6hMJkPXAHM1u7M3EfmbE1edI=',
            },
        ],
    }
    ,
    {
        id:'4',
        name:'EliAn GeoVAnni',
        location:'Gujrat',
        profile:'https://images.unsplash.com/photo-1653815946764-75c5702a9397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        posts:[
            {
                id:'1',
                post:'https://images.unsplash.com/photo-1653766640097-c237ac764ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
        ],    
    }
    ,
    {
        id:'5',
        name:'Roozbeh Badizadegan',
        location:'Tehran',
        profile:'https://images.unsplash.com/photo-1653763742809-98f8b759c01e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        posts:[
            {
                id:'1',
                post:'https://images.unsplash.com/photo-1653831130435-7b5a9306f867?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'2',
                post:'https://images.unsplash.com/photo-1601751664209-be452817a8ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
        ],
    }
    ,
    {
        id:'6',
        name:'mohammed idris',
        location:'Algeria',
        profile:'https://images.unsplash.com/photo-1653766640097-c237ac764ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        posts:[
            {
                id:'1',
                post:'https://images.unsplash.com/photo-1653838049933-872d585b8d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
        ],
    }
    ,
    {
        id:'7',
        name:'Roman Bolozan',
        location:'Florida',
        profile:'https://images.unsplash.com/photo-1653830107226-c4d29d9497bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        posts:[
            {
                id:'1',
                post:'https://images.unsplash.com/photo-1653764828265-f4bba49cf54d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'4',
                post:'https://media.istockphoto.com/photos/portrait-of-the-beautiful-young-pro-gamer-girl-sitting-at-her-and-picture-id1010651662?k=20&m=1010651662&s=170667a&w=0&h=w_p9nBForz3zKCEIeitV4jriBnvOtDiQUfAr733F_Qk=',
            },
        ],
    },
];

const Post_Profiles=({route,onOptionPress,onProfileSelect})=>{
        return(
            <View styles={styles.profile_post_main}>
                {post_profiles.map((item)=>(
                    <Profiles profileSelect={()=>{onProfileSelect(item)}} route={route} messageModel={onOptionPress} key={item.id} profile={item.profile} location={item.location} name={item.name} posts={item.posts}/>
                ))}
            </View>
            
        );

    
};

const Profiles=({route,profile,location,name,posts,messageModel,profileSelect})=>{
    return(
        <View style={styles.profile_post_main}>
            <View style={styles.profile_post_head}>
                <Pressable onPress={profileSelect} style={styles.profile_post_head_sub_left}>
                    <Image style={styles.profile_img} source={{uri:profile}}/>
                    <View style={{marginVertical:15}}>
                        <Text style={styles.profile_head}>{name}</Text>
                        <Text style={styles.profile_desc}>{location}</Text>
                    </View>
                </Pressable>
                <Pressable onPress={messageModel}>
                    <View style={styles.profile_post_head_sub_right}>
                        <Entypo name="dots-three-horizontal" size={24} color="black" />
                    </View>
                </Pressable>
            </View>
            <Post route={route}posts={posts}/>
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
        </View>
    );

};


const Post=({route,posts})=>{
    const {width} =useWindowDimensions();
    const post_dim_w=width;
    const post_dim_h=width-10;
    const flatlistRef=useRef();
    const [img_index,setIndex]=useState(0);
    const onViewableItemsChanged=useRef((item)=>{
        if(item.viewableItems.length>0)
        {
            setIndex(item.viewableItems[0].index);
        }
        
        
    });
    const viewabilityConfig=useRef({
        itemVisiblePercentThreshold:50,
    });
    

    return(
        <View style={styles.profile_body}>
            <FlatList
            horizontal
            data={posts}
            pagingEnabled
            ref={flatlistRef}
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged.current}
            keyExtractor={(item)=>item.id}
            viewabilityConfig={viewabilityConfig.current}
            renderItem={({item})=>{
                return <Image style={[styles.post_image,{width:post_dim_w,height:post_dim_h}]} source={{uri:item.post}} />       
            }}
            />
            {
                posts.length>1?(
                    <View style={{position:"absolute",top:15,right:10,backgroundColor:'rgba(0,0,0,0.5)',width:25,height:15,justifyContent:"center",alignItems:"center",borderRadius:10}}><Text style={{color:"white",fontWeight:"400",fontSize:10}}>{img_index+1}/{posts.length}</Text></View>
                ):null
            }
            {
                posts.length>1&&img_index>0?(
                    <AntDesign style={{position:"absolute", left:5}} name="leftcircle" size={24} color='rgba(188,192,195,0.9)' onPress={()=>{flatlistRef.current.scrollToIndex({animated: true, index:(img_index==0?0:img_index-1)});}} />
                ):(null)

            }
            {
                posts.length>1&&img_index<posts.length-1?(<AntDesign style={{position:"absolute", right:5}} name="rightcircle" size={24} color="rgba(188,192,195,0.9)" onPress={()=>{flatlistRef.current.scrollToIndex({animated: true, index:(img_index==posts.length-1?img_index:img_index+1)});}} />):null
            }
            
            
            {   posts.length>1?(
                    <View  style={{flexDirection:"row"}}>
                    {posts.map((item,index)=>{
                            return(
                            <View key={item.id} style={[styles.profile_bottom_mid,{backgroundColor:index===img_index?"#607d8b":"#abb8c3"}]}></View>
                    );})}
            </View>):null
            }
            
                
        </View>

    );
};


const styles=StyleSheet.create({
    profile_post_main:{
    },
    profile_img:{
        width:50,
        height:50,
        borderRadius:25,
        borderColor:"black",
        borderWidth:1,
        margin:10,

    },
    profile_head:{
        fontSize:14,
        fontWeight:"700",
    },
    profile_body:{
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    },
    profile_desc:{
        fontSize:10,
        fontWeight:"100",
    },
    profile_post_head:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    profile_post_head_sub_left:{
        flexDirection:"row",
        width:"90%",
    },
    profile_post_head_sub_right:{
        justifyContent:"center",
        alignItems:"center",
        paddingRight:10,

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
    profile_bottom_mid:{
        width:6,
        height:6,
        borderRadius:3,
        margin:2,
    },
    post_image:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10,
        
    },
    actions:{
        marginHorizontal:7,
    },
    
});

export default Post_Profiles;