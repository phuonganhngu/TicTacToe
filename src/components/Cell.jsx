import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Cross from "./Cross";

const Cell = (props) => {
  const { cell, onPress } = props;
  return (
    <Pressable
      onPress={() => onPress()}
      style={styles.cell}
    >
      {cell === "o" && <View style={styles.circle} />}
      {cell === "x" && <Cross />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    flex: 1,
    // borderWidth: 3,
    // borderColor: "red",
  },
  circle: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 10,
    borderColor: "white",
  },
});

export default Cell;
