import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Chat from "./src/screen/Chat";
import Home from "./src/screen/Home";
import { Color } from "./src/styles/index";
const Tab = createMaterialBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // labeled={false}
        barStyle={{ backgroundColor: Color.red }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <Icon name="home-outline" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="chat"
          component={Chat}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <Icon name="chatbox-outline" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="notifications"
          component={Chat}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <Icon name="notifications-outline" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
