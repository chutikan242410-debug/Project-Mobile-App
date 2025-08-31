import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>โปรไฟล์ผู้ใช้</Text>
      <Text>ชื่อ: นายจักรกฤษ</Text>
      <Text>ที่อยู่: กรุงเทพฯ</Text>
      <Text>เบอร์: 080-123-4567</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
