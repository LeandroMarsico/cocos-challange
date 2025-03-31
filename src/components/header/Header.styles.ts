import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    marginBottom: 10,
    backgroundColor: Colors.backgroundLight,
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textDark,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: Colors.borderLight,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: Colors.blueLight,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  searchButtonText: {
    color: Colors.textLight,
    fontSize: 16,
    fontWeight: "bold",
  },
});
