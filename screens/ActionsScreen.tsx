import React from "react"
import { Button, ScrollView, Text, View } from "react-native"
import { styles } from "../styles"
import ActionsList from "../components/ActionsList"
import { data } from "../data"

const ActionsScreen = () => {
  return (
    <ScrollView>
      <ActionsList listValue={0.5} actions={data?.halfPointers} />
      <ActionsList listValue={1} actions={data?.onePointers} />
      <ActionsList listValue={2} actions={data?.twoPointers} />
      <ActionsList listValue={3} actions={data?.threePointers} />
      <ActionsList listValue={4} actions={data?.fourPointers} />
    </ScrollView>
  )
}

export default ActionsScreen
