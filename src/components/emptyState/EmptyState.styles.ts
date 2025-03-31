import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    opacity: 0.8,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.title,
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: Colors.message,
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 24,
    maxWidth: 300,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.success,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    gap: 10,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: "500",
  },
});
