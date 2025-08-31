import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CartScreen({ route }) {
  const { item, qty } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ตะกร้าของฉัน</Text>
      {item ? (
        <Text>
          {item.name} x {qty} = {item.price * qty} บาท
        </Text>
      ) : (
        <Text>ยังไม่มีสินค้า</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
