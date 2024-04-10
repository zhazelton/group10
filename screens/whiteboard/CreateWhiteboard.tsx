import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native-elements";
import SafeArea from "../../components/safeArea/SafeArea";
import { POST } from "../../adapters/http.adapter";

const CreateWhiteboard = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState<any>(null);

  const handleImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    //api call
    //axios.post('/create-whiteboard', {body: {name, notes}})
    try {
      const response = await POST(
        "/whiteboard",
        { name },
        true,
        "application/json"
      );

      console.log("response wwwwwwwww", response);
      navigation.navigate("Whiteboard Details");
    } catch (err) {
      console.log("Error creating whiteboard", err); //
    }

    navigation.navigate("Whiteboard Details");
  };

  return (
    <SafeArea>
      <View style={styles.container}>
        <Avatar.Icon style={styles.avatar} size={80} icon="pencil" />
        <Text style={styles.header}>Create Whiteboard</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            label="Name"
            value={name}
            onChangeText={setName}
            mode="outlined"
          />
          <TextInput
            style={[styles.textInput, styles.notesInput]}
            label="Notes"
            multiline
            value={notes}
            onChangeText={setNotes}
            mode="outlined"
          />
          {/* <TouchableOpacity style={styles.button} onPress={handleImageUpload}>
            <Text style={styles.buttonText}>Insert Image</Text>
          </TouchableOpacity>
          {image && (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          )} */}
          <Button mode="contained" style={styles.submit} onPress={handleSubmit}>
            Create
          </Button>
        </View>
      </View>
    </SafeArea>
  );
};

export default CreateWhiteboard;

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
  notesInput: {
    height: 100,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: "contain",
  },
  submit: {
    marginVertical: 20,
    backgroundColor: "blue",
    width: "100%",
  },
});