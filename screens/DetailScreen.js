import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price} บาท</Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => setQty(qty > 1 ? qty - 1 : 1)}>
          <Text style={styles.btn}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qty}>{qty}</Text>
        <TouchableOpacity onPress={() => setQty(qty + 1)}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.cartBtn}
        onPress={() => navigation.navigate("Cart", { item, qty })}
      >
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center" },
  image: { width: "100%", height: 200, borderRadius: 10 },
  name: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
  price: { fontSize: 18, color: "green" },
  row: { flexDirection: "row", alignItems: "center", marginTop: 20 },
  btn: { fontSize: 28, marginHorizontal: 20 },
  qty: { fontSize: 22 },
  cartBtn: { marginTop: 30, backgroundColor: "green", padding: 15, borderRadius: 10 },
  cartText: { color: "#fff", fontSize: 18 },
});
