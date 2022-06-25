import React, {useEffect, useRef, useState } from 'react';
import { View,Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Animated } from 'react-native';

const Post=({navigation})=>{
    const [file,setFile]=useState([]);
    const [prog,setProgress]=useState(0);
    const progressref=useRef(new Animated.Value(0)).current;
    const handle=async()=>{

        let result=await ImagePicker.launchImageLibraryAsync(
            {
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[4,3],
                quality:1,
            }
        );

        if(!result.cancelled)
        {
            setFile(result.uri);
        }

        console.log(result.uri);
    };
   

    useEffect(()=>{
        const check=navigation.addListener('focus',()=>{
            handle();
        });

    },[]);

    return (
        <View style={{justifyContent:"center",alignItems:"center",padding:150}}>
            {
               
            }
            
        </View>
    );
};
export default Post;