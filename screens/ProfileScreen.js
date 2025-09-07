import React from "react";
import { View, Text, Button, StyleSheet, useColorScheme, TouchableOpacity } from "react-native";

export default function ProfileScreen({ route, navigation }) {
  const scheme = useColorScheme();
  const user = route.params?.user || "Unknown";

  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View
      style={[
        styles.container,
        scheme === "dark" ? styles.containerDark : styles.containerLight,
      ]}
    >
      <Text style={[styles.title, scheme === "dark" ? styles.textDark : styles.textLight]}>
        User Profile
      </Text>
      <Text style={[styles.userText, scheme === "dark" ? styles.textDark : styles.textLight]}>
        Email: {user}
      </Text>

      <TouchableOpacity
        style={[styles.button, scheme === "dark" ? styles.buttonDark : styles.buttonLight]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  containerLight: { backgroundColor: "#fff" },
  containerDark: { backgroundColor: "#121212" },

  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  userText: { fontSize: 18, textAlign: "center", marginBottom: 30 },

  textLight: { color: "#333" },
  textDark: { color: "#eee" },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonLight: { backgroundColor: "#ff6b6b" }, // สีแดงสวย
  buttonDark: { backgroundColor: "#ff8787" },

  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold", textAlign: "center" },
});
