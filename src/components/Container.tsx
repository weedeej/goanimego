import { View, StyleSheet, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "./Header";
import { Colors } from "@/constants";

export function Container(props: ViewProps) {
  const insets = useSafeAreaInsets();
  const safePaddings = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right
  }
  return (
    <View {...props} style={{...styles.container, ...safePaddings, ...(props.style as any)}}>
      <Header/>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
});