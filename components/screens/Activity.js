import React from 'react';
import { SafeAreaView,View,Text,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView,StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

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


const Activity=({navigation})=>{

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <View style={{width:"100%",height:150,justifyContent:"center",alignItems:"center"}}>
                        <Ionicons name="heart-circle-outline" size={100} color="black" />
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center",marginHorizontal:50}}>
                        <Text style={{paddingVertical:10}}>
                            Activity On Your Posts
                        </Text>
                        <Text style={{paddingVertical:10,textAlign:'center'}}>
                            When someone likes or  comments on one of your posts.you'll see it here.
                        </Text>
                        <Text style={{fontWeight:"700",color:"#47afff",paddingVertical:10}}>
                            Share your first photo
                        </Text>
                    </View>
                    <View style={{width:"100%",paddingHorizontal:10}}>
                        <Text style={{fontWeight:"700",marginVertical:20}}>
                            Suggestions For You
                        </Text>
                        {
                            post_profiles.map((item)=>(
                                <View key={item.id} style={{flexDirection:"row",justifyContent:"space-between",paddingBottom:10}}>
                                    <View style={{flexDirection:"row"}}>
                                        <Image style={{width:60,height:60,borderRadius:30}} source={{uri:item.profile}}/>
                                        <View style={{marginLeft:10}}>
                                            <Text style={{fontWeight:"700"}}>
                                                {item.name}
                                            </Text>
                                            <Text>
                                                {item.location}
                                            </Text>
                                        </View>

                                    </View>
                                    <Pressable>
                                        <Text  style={{backgroundColor:"#0095f6",paddingHorizontal:10,paddingVertical:5,borderRadius:5,fontWeight:"700",color:"white"}}>
                                            Follow
                                        </Text>
                                    </Pressable>
                                </View>
                            ))
                        }
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};


const styles=StyleSheet.create({

    main:{

    },

});
export default Activity;