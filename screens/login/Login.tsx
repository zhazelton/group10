import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import { useAuthContext } from "../../security/authContext/AuthContext";
import SafeArea from "../../components/safeArea/SafeArea";

function Login({ navigation }: any) {
  const { handleLogin } = useAuthContext();

  // State variables for username and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeArea>
      <View style={styles.container}>
        <Avatar.Icon style={styles.avatar} size={80} icon="lock" />
        <Text style={styles.header}>Login</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={setEmail} // Update username state on text input change
          />
          <TextInput
            style={styles.textInput}
            label="Password"
            secureTextEntry={true}
            mode="outlined"
            value={password}
            onChangeText={setPassword} // Update password state on text input change
          />

          <Button
            mode="contained"
            style={styles.submit}
            onPress={() => handleLogin(email, password)}
          >
            Login
          </Button>
          <View style={styles.others}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Forgot-Password")}
            >
              <Text style={styles.link}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.link}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeArea>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  avatar: {
    marginBottom: 20,
    backgroundColor: "blue",
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
    justifyContent: "space-between",
  },
  link: {
    color: "blue",
  },
});
