import { useThemeStore } from "@/store/theme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "./global.css";
export default function RootLayout() {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} animated={true} />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: true, title: "EXPO 组件测试" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
