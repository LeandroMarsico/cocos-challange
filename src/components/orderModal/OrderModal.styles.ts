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
    color: Colors.textDark,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.label,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  sideButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: Colors.backgroundLight,
  },
  buyButton: {
    backgroundColor: Colors.buttonBuy,
  },
  sellButton: {
    backgroundColor: Colors.buttonSell,
  },
  orderTypeButton: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: Colors.buttonDefault,
  },
  selectedButton: {
    backgroundColor: Colors.blueLight,
  },
  buttonText: {
    color: Colors.buttonText,
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.buttonDefault,
    borderRadius: 8,
    marginBottom: 10,
  },
  submitButton: {
    width: "100%",
    padding: 12,
    backgroundColor: Colors.blueLight,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: Colors.buttonText,
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelButtonText: {
    color: Colors.textMuted,
  },
});
