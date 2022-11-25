import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CCalendar from "./memascalendar/components/CCalendar";

export default function App() {
  return (
    <View style={styles.container}>
      <CCalendar style={{ width: "90%", height: "50%" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
