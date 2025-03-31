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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  ticker: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.ticker,
  },
  marketValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.ticker,
  },
  label: {
    fontSize: 14,
    color: Colors.label,
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.ticker,
  },
  gain: {
    fontSize: 14,
    fontWeight: "bold",
  },
  totalReturn: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
