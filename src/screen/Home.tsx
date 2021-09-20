import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Theme, { Color } from "../styles/index";
import Header from "../components/header";
import Status from "../components/status";
import Post from '../components/post'
import { ScrollView } from "react-native-gesture-handler";
function Home() {
  return (
    <SafeAreaView>
      <Header>
        <View>
          <Text style={styles.logo}>facebook</Text>
        </View>
      </Header>
      <ScrollView>
        <Status />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> 
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  logo: {
    color: Color.red,
    fontSize: 18,
    fontWeight: "700",
  },
  button: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: Color.gray,
  },
});
