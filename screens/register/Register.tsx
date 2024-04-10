import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import SafeArea from "../../components/safeArea/SafeArea";
import { POST } from "../../adapters/http.adapter";

const Register = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // api call with above values
    // either authenticate the user with the provided value using handleLogin like in login page
    // or navigate to Home
    try {
      let response = await POST("/auth/register", {
        email,
        username,
        password,
      });
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
    }
    // navigation.navigate("Home");
  };
  useEffect(() => {
    // validate(); // Uncomment if needed
  }, [email, username, password]);
  return (
    <SafeArea>
      <View style={styles.container}>
        <Avatar.Icon style={styles.avatar} size={80} icon="account-plus" />
        <Text style={styles.header}>Register</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textInput}
            label="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.textInput}
            label="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Button
            mode="contained"
            style={styles.submit}
            onPress={handleRegister}
          >
            Register
          </Button>
          <View style={styles.others}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.link}>Already have an account? Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  avatar: {
    marginBottom: 20,
    backgroundColor: "blue",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  form: {
    width: "80%",
    alignSelf: "center",
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
  },
  submit: {
    marginVertical: 20,
    backgroundColor: "blue",
  },
  others: {
    flexDirection: "row",
    justifyContent: "center", // Center the text horizontally
  },
  link: {
    color: "blue",
  },
});