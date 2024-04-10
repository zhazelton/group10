import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuthContext } from "../../security/authContext/AuthContext";

function Dashboard({ navigation }: any) {
  const { user, handleLogout } = useAuthContext();
  console.log("user>>>>", user);
  // const { handleLogout } = useAuthContext();

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Text style={styles.header}>Welcome, {user.username}</Text>
        </>
      )}
      <TouchableOpacity
        style={[styles.button, styles.fullWidthButton]}
        onPress={() => navigation.navigate("Create Whiteboard")}
      >
        <Text style={styles.buttonText}>Create Whiteboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.fullWidthButton]}
        onPress={() => navigation.navigate("Whiteboard Gallery")}
      >
        <Text style={styles.buttonText}>View Whiteboard Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.fullWidthButton, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  fullWidthButton: {
    width: "100%",
  },
  logoutButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
});

