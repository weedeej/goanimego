import { Container } from "@/components";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import * as ScreenOrientation from 'expo-screen-orientation';

export function Home() {
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE) //
  return (
    <Container style={{flex: 1, alignItems: "center"}}>
      <Button>Open up App.tsx to start working on your app!</Button>
    </Container>
  )
}