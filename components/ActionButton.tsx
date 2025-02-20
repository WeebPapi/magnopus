import React from "react"
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native"
import { styles } from "../styles"
import { addPointsToFirestore } from "../api/updatePoints"

interface ActionButtonProps {
  label: string
  pointValue: number
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, pointValue }) => {
  const colors = ["#fc721c", "#fcc81c", "#109e1c", "#1c5bfc", "#15cfbc"]
  const rippleColors = ["#994612", "#b59014", "#095c10", "#0e2f82", "#0b6e64"]
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            ...styles.actionButton,
            backgroundColor: colors[Math.floor(pointValue)],
          },
          Platform.OS === "ios" &&
            pressed && {
              opacity: 0.7,
            },
        ]}
        android_ripple={{
          color: rippleColors[Math.floor(pointValue)],
          radius: 5,
        }}
        onPress={() => {
          addPointsToFirestore(pointValue)
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 14,
            color: "white",
            fontWeight: 600,
          }}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  )
}

export default ActionButton
