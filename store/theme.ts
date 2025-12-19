import { useColorScheme } from "react-native";
import { create } from "zustand";

interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: useColorScheme() ?? "light",
  setTheme: (theme: string) => set(() => ({ theme })),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));
