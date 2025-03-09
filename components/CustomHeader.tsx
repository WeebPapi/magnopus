import { View, Text } from "react-native"
import React, { useEffect } from "react"
import { styles } from "../styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRoute } from "@react-navigation/native"
import PointsDisplay from "./PointsDisplay"
import { getPoints } from "../api/getPoints"

interface CustomHeaderProps {
  title: string
}

const CustomHeader = () => {
  const fetchPoints = async () => {
    try {
      const fetchedPoints = await getPoints()
      setPoints(fetchedPoints)
    } catch (error) {
      console.error(error)
    }
  }

  const [points, setPoints] = React.useState<number>(0)
  useEffect(() => {
    fetchPoints()
    const intervalId = setInterval(fetchPoints, 500)

    return () => clearInterval(intervalId)
  }, [])

  const { name } = useRoute()
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 18, paddingHorizontal: "5%" }}>{name}</Text>
      <PointsDisplay points={points} />
    </View>
  )
}

export default CustomHeader
