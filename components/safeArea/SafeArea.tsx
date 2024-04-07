import React, { ReactNode } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function SafeArea({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar?.currentHeight }}>
      {children}
    </SafeAreaView>
  );
}
