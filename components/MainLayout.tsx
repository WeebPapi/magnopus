import { View, Text } from "react-native"
import React from "react"
import CustomHeader from "./CustomHeader"
import { styles } from "../styles"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.content}>{children}</View>
    </View>
  )
}

export default MainLayout
