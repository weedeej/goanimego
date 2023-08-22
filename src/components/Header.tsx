import { BaseStyles, Colors } from "@/constants";
import { Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MD3DarkTheme } from "react-native-paper"
// @ts-ignore
import iconMain from "@/assets/iconMain.png";
import Ionicons from '@expo/vector-icons/Ionicons';

export function Header() {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {}} style={{padding: 4, borderRadius: 50}}>
        <Ionicons name="menu" size={32} color={Colors.primary}/>
      </TouchableHighlight>
      <Image source={iconMain} style={{ width: 48, height: 48, marginLeft: "auto" }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: MD3DarkTheme.colors.background,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 8
  }
})