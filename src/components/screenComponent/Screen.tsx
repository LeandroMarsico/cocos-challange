import React, { FC } from "react";
import type { StatusBarStyle } from "react-native";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Screen.styles";
import { THEME_CONSTANTS } from "@/src/constants/theme";

enum ThemeTypes {
  LIGHT = "light-content",
  DARK = "dark-content",
}

interface ScreenProps {
  children: React.ReactNode;
  backgroundColor?: string;
  theme?: ThemeTypes;
  fullwidth?: boolean;
}
const Screen: FC<ScreenProps> = ({ children, theme = ThemeTypes.LIGHT }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={theme} />
      <View style={styles.containerChildren}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
