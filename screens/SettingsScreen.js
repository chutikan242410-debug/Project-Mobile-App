import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
        <Text style={{ marginRight: 10 }}>Enable Option:</Text>
        <Switch value={isEnabled} onValueChange={setIsEnabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 20, marginBottom: 20, textAlign: "center" },
});
