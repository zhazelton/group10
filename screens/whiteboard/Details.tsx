import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import SafeArea from "../../components/safeArea/SafeArea";


function WhiteboardDetails({ navigation }: any) {
  const name = "Huge Whiteboard";
  const handleViewinAR = () => {
    //TODO open AR view
    navigation.navigate("View in AR");
  };

  const handleeditin2d = () => {
    //api call
    //axios.post('/create-whiteboard', {body: {name, notes}})
    navigation.navigate("Edit your Whiteboard");
  };

  const handleDelete = () => {
      navigation.navigate("Home");
  };

  const handleShare = () => {
       navigation.navigate("Share A Whiteboard");
  }

  return (
      <SafeArea>
          <View style={styles.container}>
            <Text style={styles.header}>{name}</Text>
            <Image
              style={styles.image}
              source={{ uri: "https://via.placeholder.com/350" }}
            />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={handleViewinAR}>
                <Text style={styles.buttonText}>View in AR</Text >
              </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleeditin2d}>
                <Text style={styles.buttonText}>Edit in 2D</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleShare}>
                <Text style={styles.buttonText}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
                <Text style={[styles.buttonText, styles.deleteButtonText]}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeArea>
  );
}

export default WhiteboardDetails;

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
