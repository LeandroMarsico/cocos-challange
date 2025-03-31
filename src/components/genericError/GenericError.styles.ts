import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundLight,
    padding: 20,
  },
  content: {
    alignItems: "center",
    backgroundColor: Colors.background,
    borderRadius: 15,
    padding: 30,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.title,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: Colors.message,
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 24,
  },
  retryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.blueLight,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    gap: 10,
  },
  buttonText: {
    color: Colors.textLight,
    fontSize: 16,
    fontWeight: "500",
  },
  emptyText: {
    fontSize: 16,
    color: Colors.textMuted,
    textAlign: "center",
    paddingTop: 20,
  },
});
