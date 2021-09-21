import React from "react";
import { View } from "react-native";

import Header from "../components/header";
import Status from "../components/status";
import Post from '../components/post'
import Logo from "../components/logo";
function Home() {
  return (
    <View>
      <Header>
        <Logo/>
      </Header>
      <View>
        <Status />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> 
      </View> 
    </View>
  );
}

export default Home;

