import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: Colors.blueLight,
  },
  submitButtonText: {
    color: Colors.background,
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelButtonText: {
    color: Colors.type,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
