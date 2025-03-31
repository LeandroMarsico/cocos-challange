import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: Colors.background,
    borderRadius: 10,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  header: {
    marginBottom: 8,
  },
  ticker: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.ticker,
  },
  name: {
    fontSize: 14,
    color: Colors.textMuted,
    marginTop: 4,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  label: {
    fontSize: 14,
    color: Colors.textMuted,
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.value,
  },
  lastPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.title,
  },
  return: {
    fontSize: 14,
    fontWeight: "bold",
  },
});