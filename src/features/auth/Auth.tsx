import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { useAppSelector } from "app/hooks";

function Login() {
  const user = useAppSelector(state=>state.auth.user)
  // const handleLogin = async () => {
  //   const result = await LoginManager.logInWithPermissions([
  //     "public_profile",
  //     "email",
  //   ]);

  //   if (result.isCancelled) {
  //     throw "User cancelled the login process";
  //   }

  //   // Once signed in, get the users AccesToken
  //   const data = await AccessToken.getCurrentAccessToken();

  //   if (!data) {
  //     throw "Something went wrong obtaining access token";
  //   }

  //   // Create a Firebase credential with the AccessToken
  //   const facebookCredential = auth.FacebookAuthProvider.credential(
  //     data.accessToken
  //   );

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(facebookCredential);
  // };

  return (
    <View style={styles.form}>
      <Text>Facebook</Text>
      <TouchableOpacity style={styles.btn}>
        <Icon name="logo-facebook" size={20} color="#fff" />
        <Text style={styles.text}>Đăng nhập với facebook</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#156ee2",
  },
  text: {
    marginLeft: 10,
    color: "#fff",
  },
});
