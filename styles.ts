import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "red",
    height: 350,
    fontSize: 34,

    color: "black",
  },
  actionButton: {
    width: 110,
    height: 110,
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1c5bfc",
    borderRadius: 20,
  },
})
