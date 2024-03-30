import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import SafeArea from "../../components/safeArea/SafeArea";

function Register({ navigation }: any) {
  const [usedCreds, setUsedCreds] = useState([]);
  const [credentials, setCredentials] = useState({});
  const [formError, setFormError] = useState({});

  return (
    <SafeArea>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        enabled={true}
      >
        <ScrollView style={styles.paper}>
          <Avatar.Icon style={styles.avatar} size={24} icon="key" />
          <Text style={styles.header}>Register</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.textInput}
              label="Fullname"
              onChangeText={(text) =>
                setCredentials({ ...credentials, fullname: text })
              }
            />

            <TextInput
              style={styles.textInput}
              label="Email"
              onChangeText={(text) =>
                setCredentials({ ...credentials, email: text })
              }
            />

            <TextInput
              style={styles.textInput}
              label="Username"
              onChangeText={(text) =>
                setCredentials({ ...credentials, username: text })
              }
            />

            <TextInput
              style={styles.textInput}
              label="Password"
              secureTextEntry={true}
              onChangeText={(text) =>
                setCredentials({ ...credentials, password: text })
              }
            />

            <Button mode="contained" style={styles.submit} color="blue">
              Register
            </Button>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeArea>
  );
}
export default Register;

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
