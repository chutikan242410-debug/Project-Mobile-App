import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme } from "react-native";

export default function LoginScreen({ navigation }) {
  const scheme = useColorScheme();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (email === "test@demo.com" && pass === "123456") {
      navigation.replace("MainTabs", { user: email });
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <View
      style={[
        styles.container,
        scheme === "dark" ? styles.containerDark : styles.containerLight,
      ]}
    >
      <Text style={[styles.title, scheme === "dark" ? styles.textDark : styles.textLight]}>
        Welcome Login
      </Text>

      <TextInput
        style={[styles.input, scheme === "dark" ? styles.inputDark : styles.inputLight]}
        placeholder="Email"
        placeholderTextColor={scheme === "dark" ? "#aaa" : "#666"}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, scheme === "dark" ? styles.inputDark : styles.inputLight]}
        placeholder="Password"
        placeholderTextColor={scheme === "dark" ? "#aaa" : "#666"}
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />

      <TouchableOpacity
        style={[styles.button, scheme === "dark" ? styles.buttonDark : styles.buttonLight]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  containerLight: { backgroundColor: "#f5f5f5" }, // พื้นหลังทางการสีอ่อน
  containerDark: { backgroundColor: "#1e1e1e" },

  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 30 },
  textLight: { color: "#222" },
  textDark: { color: "#fff" },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  inputLight: { borderColor: "#888", backgroundColor: "#fff", color: "#000" },
  inputDark: { borderColor: "#555", backgroundColor: "#2a2a2a", color: "#fff" },

  button: {
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonLight: { backgroundColor: "#0a3d62" }, // สีฟ้าเข้มทางการ
  buttonDark: { backgroundColor: "#3c6382" },

  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
