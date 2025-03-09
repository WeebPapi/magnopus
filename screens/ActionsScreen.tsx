import React from "react"
import { Button, ScrollView, Text, View } from "react-native"
import { styles } from "../styles"
import ActionsList from "../components/ActionsList"
import { actionsData } from "../data"
import MainLayout from "../components/MainLayout"

const ActionsScreen = () => {
  return (
    <MainLayout>
      <ScrollView>
        <ActionsList listValue={0.5} actions={actionsData?.halfPointers} />
        <ActionsList listValue={1} actions={actionsData?.onePointers} />
        <ActionsList listValue={2} actions={actionsData?.twoPointers} />
        <ActionsList listValue={3} actions={actionsData?.threePointers} />
        <ActionsList listValue={4} actions={actionsData?.fourPointers} />
      </ScrollView>
    </MainLayout>
  )
}

export default ActionsScreen
