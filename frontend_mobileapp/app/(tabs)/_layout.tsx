import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#5E3EE1",
            tabBarInactiveTintColor: "#888",
            tabBarShowLabel: true,
            tabBarStyle: {
                backgroundColor: "#fff",
                borderTopWidth: 1,
                elevation: 5,
                height: 100,
            },
        }}
    >
      <Tabs.Screen name="index" options={{ tabBarIcon: ({color, focused}) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />  }} />

      <Tabs.Screen name="practices" options={{ tabBarIcon: ({color, focused}) => <AntDesign name={focused ? "code" : "code"} size={24} color={color} />  }} />

      <Tabs.Screen name="challenges" options={{ tabBarIcon: ({color, focused}) => <FontAwesome name={focused ? "trophy" : "trophy"} size={24} color={color} />  }} />

      <Tabs.Screen name="learn" options={{ tabBarIcon: ({color, focused}) => <FontAwesome name={focused ? "book" : "book"} size={24} color={color} />  }} />
      
    </Tabs>
  )
}