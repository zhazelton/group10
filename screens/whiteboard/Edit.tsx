import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import SafeArea from "../../components/safeArea/SafeArea";
import { Component } from 'react';
import { WebView } from 'react-native-webview';
import {
  AuthContextProvider,
  useAuthContext,
} from "../../security/authContext/AuthContext";

function WhiteboardEdit({ navigation }: any) {
  const name = "Huge Whiteboard";
  //const user = 'zach'; //update to use auth info
  const user = 'zach';
  const whiteboardname = 'zach' //update to use whiteboard name from database
  //need to pass the whiteboard name and username in the url
  return (
    <SafeArea>
        <WebView source={{ uri: 'http://ec2-13-58-70-148.us-east-2.compute.amazonaws.com:8080/?whiteboardid=' + user + '&username=' + user }} style={{ flex: 1 }} />
    </SafeArea>
  );
}

export default WhiteboardEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  buttonsContainer: {
    width: "80%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  deleteButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
  deleteButtonText: {
    color: "white",
  },
});