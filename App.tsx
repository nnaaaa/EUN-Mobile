import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./src/screen/Home";
import Chat from "./src/screen/Chat";
import {Color} from './src/styles/index'
const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={false}
        barStyle={{ backgroundColor: Color.red }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home-outline" color={color} size={20}/>
            ),
          }}
        />
        <Tab.Screen
          name="chat"
          component={Chat}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="chatbox-outline" color={color} size={20}/>
            ),
          }}
        />
        <Tab.Screen
          name="notifications"
          component={Chat}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="notifications-outline" color={color} size={20}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
