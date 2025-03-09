import { View, Text, ScrollView } from "react-native"
import React from "react"
import CustomHeader from "./CustomHeader"
import { styles } from "../styles"
import { SafeAreaView } from "react-native-safe-area-context"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <CustomHeader />
      {children}
    </SafeAreaView>
  )
}

export default MainLayout
