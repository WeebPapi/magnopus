import { View, Text } from "react-native"
import React, { useEffect } from "react"
import { getPoints } from "../api/getPoints"

interface PointsDisplayProps {
  points: number
}

const PointsDisplay: React.FC<PointsDisplayProps> = ({ points }) => {
  return (
    <View
      style={{
        marginHorizontal: "5%",
        backgroundColor: "black",
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 15,
        opacity: 0.8,
      }}
    >
      <Text style={{ color: "white", fontSize: 16 }}>{points} Points</Text>
    </View>
  )
}

export default PointsDisplay
