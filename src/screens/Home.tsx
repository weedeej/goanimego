import { Container } from "@/components";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

export function Home() {
  return (
    <Container style={{flex: 1, alignItems: "center"}}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  )
}