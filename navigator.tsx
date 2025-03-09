import React from "react"
import ActionsScreen from "./screens/ActionsScreen"
import { RootStackParamList } from "./types"
import { NavigationContainer } from "@react-navigation/native"
import RedeemScreen from "./screens/RedeemScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Foundation from "@expo/vector-icons/Foundation"
import AntDesign from "@expo/vector-icons/AntDesign"
import MainLayout from "./components/MainLayout"

const Tab = createBottomTabNavigator<RootStackParamList>()

export const TabNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => {
              if (route.name === "Actions")
                return (
                  <Foundation name="clipboard-notes" size={30} color={color} />
                )
              return <AntDesign name="gift" size={30} color={color} />
            },
            tabBarShowLabel: false,
          })}
        >
          <Tab.Screen name="Actions" component={ActionsScreen} />

          <Tab.Screen name="Redeem" component={RedeemScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}
