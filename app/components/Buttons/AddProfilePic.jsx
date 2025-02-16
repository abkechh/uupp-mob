import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function AddProfilePic({ onImageSelect, initialImage }) {
  const [image, setImage] = useState(initialImage || null);

  const pickImage = async () => {
    try {
      // Request permissions
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to upload a photo!");
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        onImageSelect && onImageSelect(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      alert("Failed to pick image");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.uploadContainer}
        onPress={pickImage}
        activeOpacity={0.7}
      >
        {image ? (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: image }} style={styles.profileImage} />
            <View style={styles.editIconContainer}>
              <MaterialIcons name="edit" size={10} color="#FFF" />
            </View>
          </View>
        ) : (
          <View style={styles.placeholderContainer}>
            <MaterialIcons name="add-a-photo" size={16} color="#666" />
          </View>
        )}
      </TouchableOpacity>
      {!image && <Text style={styles.placeholderText}>Add profile Photo</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  uploadContainer: {
    width: 48,
    height: 48,
    borderRadius: 60,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
  },
  placeholderText: {
    marginTop: 8,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  placeholderContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "dashed",
    borderRadius: 20,
  },
  editIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
