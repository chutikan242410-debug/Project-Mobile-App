import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://laz-img-sg.alicdn.com/p/d8808bcbe7765b8586162b31ab465366.jpg" }} style={styles.logo} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Home")}
      >
        <Text style={styles.buttonText}>เมนู ตามใจชอบ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#006400" },
  logo: { width: 200, height: 200, borderRadius: 100, marginBottom: 30 },
  button: { backgroundColor: "#fff", padding: 15, borderRadius: 20 },
  buttonText: { fontSize: 18, fontWeight: "bold", color: "#333" },
});
