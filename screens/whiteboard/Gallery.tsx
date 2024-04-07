import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import SafeArea from "../../components/safeArea/SafeArea";

type RootStackParamList = {
  "Whiteboard Gallery": undefined;
  "Whiteboard Details": { imageUrl: string };
};

type GalleryScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Whiteboard Gallery"
>;

interface GalleryScreenProps {
  navigation: GalleryScreenNavigationProp;
}

const WhiteboardGallery: React.FC<GalleryScreenProps> = ({ navigation }) => {
  const imageUrls: string[] = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/350",
    "https://via.placeholder.com/350",
    "https://via.placeholder.com/350",
    "https://via.placeholder.com/350",
    "https://via.placeholder.com/350",
    "https://via.placeholder.com/350",
    "https://via.placeholder.com/350",
    "https://via.placeholder.com/350",
  ];

  const handleImagePress = (imageUrl: string) => {
    navigation.navigate("Whiteboard Details", { imageUrl });
  };

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => handleImagePress(item)}>
      <Image style={styles.image} source={{ uri: item }} />
    </TouchableOpacity>
  );

  return (
    <SafeArea>
      <View style={styles.container}>
        <FlatList
          data={imageUrls}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeArea>
  );
};
export default WhiteboardGallery;

const { width } = Dimensions.get("window");
const itemWidth = (width - 20) / 2 - 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: itemWidth,
    height: itemWidth,
    margin: 5,
    borderRadius: 5,
  },
  flatListContent: {
    padding: 5,
  },
});
