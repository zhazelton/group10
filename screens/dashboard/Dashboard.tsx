import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuthContext } from "../../security/authContext/AuthContext";

function Dashboard({ navigation }: any) {
  const user = "Prapti Acharya";
  const { handleLogout } = useAuthContext();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {user}</Text>
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

