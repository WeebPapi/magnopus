import React from "react"
import { Button, Text, View } from "react-native"
import { styles } from "../styles"
import { useNavigation } from "@react-navigation/native"
import { addPointsToFirestore } from "../api/updatePoints"

const ActionsScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <Text>ActionsScreen</Text>
      <Button title="Test" onPress={() => addPointsToFirestore(0)} />
    </View>
  )
}

export default ActionsScreen
