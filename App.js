// Home.js

import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';  // style.js dosyasını burada import ediyoruz.

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.aiBar}>
        <Text style={styles.aiBarText}>AI CHAT</Text>
        <Text style={styles.versionText}>V1.0.0</Text>
      </View>
    </View>
  );
}
