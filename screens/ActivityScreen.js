import React from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from "react-native";

const mockActivities = [
  { id: "1", title: "รายการสั่งวันนี้ " },
  { id: "2", title: "ประวัติการสั่ง " },
  { id: "3", title: "รายการบริการอื่นๆ  " },
];

export default function ActivityScreen() {
  const scheme = useColorScheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        scheme === "dark" ? styles.containerDark : styles.containerLight,
      ]}
    >
      <FlatList
        data={mockActivities}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              scheme === "dark" ? styles.cardDark : styles.cardLight,
            ]}
          >
            <Text
              style={[
                styles.text,
                scheme === "dark" ? styles.textDark : styles.textLight,
              ]}
            >
              {item.title}
            </Text>
            <Text
              style={[
                styles.time,
                scheme === "dark" ? styles.timeDark : styles.timeLight,
              ]}
            >
              {item.time}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  containerLight: { backgroundColor: "#fff" },
  containerDark: { backgroundColor: "#121212" },

  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center", // จัดตรงกลาง
    justifyContent: "center",
    elevation: 3,
  },
  cardLight: { backgroundColor: "#ffe4e1" }, // สีชมพูอ่อน
  cardDark: { backgroundColor: "#2a2a2a" }, // สีเทาเข้ม

  text: { fontSize: 18, fontWeight: "bold", textAlign: "center" },
  textLight: { color: "#d14f4f" }, // สีแดงเข้ม
  textDark: { color: "#ffb6b6" }, // สีชมพูอ่อน

  time: { fontSize: 14, marginTop: 6, textAlign: "center" },
  timeLight: { color: "#8b0000" }, // สีแดงเข้มกว่า
  timeDark: { color: "#ffa6a6" }, // สีชมพูอ่อนกว่า
});
