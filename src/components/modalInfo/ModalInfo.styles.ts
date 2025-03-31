import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.overlayBackgroundDark,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: Colors.title,
  },
  message: {
    fontSize: 16,
    color: Colors.label, 
    textAlign: "center",
    marginBottom: 20,
  },
});
