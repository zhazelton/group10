import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";

function Login({ navigation }: any) {
  return (
    <View style={styles.paper}>
      <Avatar.Icon style={styles.avatar} size={24} icon="lock" />
      <Text style={styles.header}>Login</Text>
      <View style={styles.form}>
        <TextInput style={styles.textInput} label="Username" />
        <TextInput
          style={styles.textInput}
          label="Password"
          secureTextEntry={true}
        />

        <Button mode="contained" style={styles.submit} color="blue">
          Login
        </Button>
        <View style={styles.others}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Forgot-Password")}
          >
            <Text>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  paper: {
    marginTop: 25,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
  },
  avatar: {
    margin: 20,
    alignSelf: "center",
    backgroundColor: "blue",
  },
  form: {
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
  },
  textInput: {
    marginTop: 10,
  },
  others: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  submit: {
    margin: 20,
  },

  error: {
    color: "red",
  },
});
