import { StyleSheet } from "react-native";
import { colors } from "../../config/color";

const styles = StyleSheet.create({
  headerWrap: {
    padding: 10,
    backgroundColor: colors.primary,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  searchByTextWrap: {
    backgroundColor: colors.white,
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  searchPlaceholder: { width: "100%", marginLeft: 5 },
  locationCatSearchWrap: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  
});

export default styles;
