import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

const menu = [
  { id: "1", name: "ยำวุ้นเส้น", price: 89, image: "https://img.kapook.com/u/2016/surauch/cook1/u5_2.jpg" },
  { id: "2", name: "ยำแซลมอน", price: 99, image: "https://i.ytimg.com/vi/ZP3yJQzlb98/maxresdefault.jpg" },
  { id: "3", name: "ยำปูม้า", price: 79, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUeCxsyOujOnjNUfScoBk6mud199K7-ywWg&s" },
  { id: "4", name: "ยำปูทะเล", price: 89, image: "https://api2.krua.co/wp-content/uploads/2021/11/RT1693_Gallery_-01.jpg" },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work Place</Text>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Detail", { item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} บาท</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  card: { flex: 1, backgroundColor: "#f9f9f9", margin: 5, padding: 10, borderRadius: 10, alignItems: "center" },
  image: { width: 100, height: 100, borderRadius: 10 },
  name: { fontSize: 16, marginTop: 5 },
  price: { fontSize: 14, color: "green", marginTop: 3 },
});
