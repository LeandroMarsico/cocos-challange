import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonGroup: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 15,
    },
    button: {
      flex: 1,
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
      marginHorizontal: 5,
      backgroundColor: Colors.buttonDefault,
    },
    buttonText: {
      color: Colors.buttonText,
      fontWeight: "bold",
      fontSize: 16,
    },
  });