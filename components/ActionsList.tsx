import { View, Text } from "react-native"
import React from "react"
import { IAction } from "../types"
import ActionButton from "./ActionButton"

interface ActionsListProps {
  listValue: number
  actions: IAction[]
}

const ActionsList: React.FC<ActionsListProps> = ({ listValue, actions }) => {
  return (
    <View>
      <Text
        style={{
          margin: 20,
          fontSize: 18,
          borderBottomWidth: 2,
          paddingBottom: 10,
          borderBottomColor: "#d9d9d9",
        }}
      >
        {listValue} points
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {actions.map((action) => (
          <ActionButton
            label={action.label}
            pointValue={action.pointsValue}
            type="action"
            key={action.label}
          />
        ))}
      </View>
    </View>
  )
}

export default ActionsList
