import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EntryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entry Screen - Awesome</Text>
      <Text style={styles.largeText}>Typescript is great if you practice more</Text>
      <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
      <Text style={styles.smallText}>ALX is awesome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
  },
  title: {
    fontSize: 28,
    color: "#000000",
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
}); 