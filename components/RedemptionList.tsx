import { View, Text } from "react-native"
import React from "react"
import { IPrize } from "../types"
import ActionButton from "./ActionButton"

interface RedemptionListProps {
  listValue: number
  prizes: IPrize[]
}

const RedemptionList: React.FC<RedemptionListProps> = ({
  listValue,
  prizes,
}) => {
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
        {prizes.map((prize) => (
          <ActionButton
            type={"reward"}
            label={prize.label}
            pointValue={prize.pointsCost}
            key={prize.label}
          />
        ))}
      </View>
    </View>
  )
}

export default RedemptionList
