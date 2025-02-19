import React from "react"
import ActionsScreen from "./screens/ActionsScreen"
import { RootStackParamList } from "./types"
import { NavigationContainer } from "@react-navigation/native"
import RedeemScreen from "./screens/RedeemScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, View } from "react-native"
import { styles } from "./styles"

const Tab = createBottomTabNavigator<RootStackParamList>()

export const TabNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Actions" component={ActionsScreen} />
          <Tab.Screen name="Redeem" component={RedeemScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}
