import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  ticker: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.ticker,
  },
  type: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.type,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.name,
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  label: {
    fontSize: 14,
    color: Colors.label,
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.value,
  },
  return: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
