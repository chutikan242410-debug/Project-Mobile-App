import React from "react";
import { SafeAreaView, Text, StyleSheet, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const scheme = useColorScheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        scheme === "dark" ? styles.containerDark : styles.containerLight,
      ]}
    >
      <Ionicons name="home-outline" size={64} color={scheme === "dark" ? "#fff" : "#333"} />
      <Text
        style={[
          styles.title,
          scheme === "dark" ? styles.textDark : styles.textLight,
        ]}
      >
        ยินดีต้อนรับ 🎉
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  containerLight: { backgroundColor: "#fff" },
  containerDark: { backgroundColor: "#121212" },
  title: { fontSize: 24, fontWeight: "700", marginTop: 20 },
  textLight: { color: "#333" },
  textDark: { color: "#eee" },
});
