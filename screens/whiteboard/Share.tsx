import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import SafeArea from "../../components/safeArea/SafeArea";
import { Component } from 'react';
import { WebView } from 'react-native-webview';

function WhiteboardEdit({ navigation }: any) {
  const name = "Huge Whiteboard";
  const share_output = "Send this link to your friends so you can whiteboard together!"
  const link = "https://http://ec2-13-58-70-148.us-east-2.compute.amazonaws.com:8080/?whiteboardid=" + username + "&username=guestA";
  //need to pass the whiteboard name and username in the url

  return (
    <SafeArea>
        <View style={styles.container}>
            <Text style={styles.header}>{share_output}</Text>
            <Text style={styles.header}>{link}</Text>
        </View>
    </SafeArea>
  );
}

export default ShareWhiteboard;

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