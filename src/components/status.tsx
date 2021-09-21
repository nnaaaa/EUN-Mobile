import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Theme, { Color } from "../styles/index";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar, Divider, Input } from "native-base";

export default function Status() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.writing}>
        <View style={{marginRight:10}}>
          <Avatar>A</Avatar>
        </View>
        <Input placeholder="Bạn đang nghĩ gì?" color="primary" />
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Icon name="videocam-outline" style={Theme.icon} />
          <Text style={Theme.text}>Phát trực tiếp</Text>
        </TouchableOpacity>
        <Divider/>
        <TouchableOpacity style={styles.button}>
          <Icon name="images-outline" style={Theme.icon} />
          <Text style={Theme.text}>Ảnh</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: Color.gray,
    backgroundColor: "#fff",
  },
  writing: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  buttonGroup: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  button: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
