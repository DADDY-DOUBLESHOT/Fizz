import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  Home from './components/screens/Home';
import  Search from './components/screens/Search';
import  Post from './components/screens/Post';
import  Activity from './components/screens/Activity';
import  Account from './components/screens/Account';
import ProfileView from './components/screens/ProfileView';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Message from './components/Message';


const Stack = createNativeStackNavigator();
const Tab= createMaterialBottomTabNavigator();


const user=[
{
        id:'0',
        user_id:'davd_007',
        name:'David',
        location:'Florida',
        profile:'https://images.unsplash.com/photo-1655027147051-8ba38b4f87db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        posts:[
            {
                id:'1',
                post:'https://images.unsplash.com/photo-1654514435830-d3a7d0a1308e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'2',
                post:'https://images.unsplash.com/photo-1654707267867-9a4f9d27317e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'3',
                post:'https://images.unsplash.com/photo-1654765435666-72cb4e1f7ee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            },
            {
                id:'4',
                post:'https://images.unsplash.com/photo-1654765437862-58f5fa64c6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'5',
                post:'https://images.unsplash.com/photo-1654514437330-69aa8be0e893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
                id:'6',
                post:'https://images.unsplash.com/photo-1654760040821-2460dc49f0ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
        ],
        friends:[

          {
              id:'1',
              name:'Daisy Shaw',
              location:'Mumbai India',
              message:'Yes of Course',
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
              id:'2',
              name:'Hamid Tajik',
              location:'New Delhi, India',
              profile:'https://images.unsplash.com/photo-1653833199473-7fda1fa2abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
              message:'Lets meet tommorrow',
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
              id:'3',
              name:'EliAn GeoVAnni',
              location:'Gujrat',
              profile:'https://images.unsplash.com/photo-1653815946764-75c5702a9397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
              message:'Hi there',
              posts:[
                  {
                      id:'1',
                      post:'https://images.unsplash.com/photo-1653766640097-c237ac764ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                  },
              ],    
          }
          ,
          {
              id:'4',
              name:'Roozbeh Badizadegan',
              location:'Tehran',
              profile:'https://images.unsplash.com/photo-1653763742809-98f8b759c01e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
              message:'Testing message',
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
        ],
},
];

const HomeScreen=()=>{

  return(
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen  name="Profile" component={ProfileView} options={({route})=>({title:route?.params?.profile?.name,headerTitleAlign:"center",headerTitleStyle:{fontSize:16}})}/>
        <Stack.Screen  name="Message" component={Message} initialParams={{user}} options={{headerShown:false}} />
      </Stack.Navigator>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={
        {
          backgroundColor:"white",
        }
      }>
        <Tab.Screen  name='HomeScreen' options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name="home-variant" size={24} color={color} />
          ),
          title:"Home"
        }} component={HomeScreen}/>
        <Tab.Screen name='Search' options={{
          tabBarIcon:({color,size})=>(
            <AntDesign name="search1" size={24} color={color} />
          )
        }} component={Search}/>
        <Tab.Screen name='Post' options={{
          tabBarIcon:({color,size})=>(
            <AntDesign name="plussquareo" size={24} color={color} />
          )
        }} component={Post}/>
        <Tab.Screen name='Activity'  options={{
          tabBarIcon:({color,size})=>(
            <AntDesign name="hearto" size={24} color={color} />
          ),
        }}component={Activity}/>
        <Tab.Screen name='Account' options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name="md-person" size={24} color={color} />
          )
        }} initialParams={{user}}  component={Account}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;