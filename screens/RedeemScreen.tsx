import { ScrollView } from "react-native"
import React from "react"
import RedemptionList from "../components/RedemptionList"
import { prizesData } from "../data"
import MainLayout from "../components/MainLayout"

const RedeemScreen = () => {
  return (
    <MainLayout>
      <ScrollView>
        <RedemptionList listValue={5} prizes={prizesData?.fivePointers} />
        <RedemptionList listValue={10} prizes={prizesData?.tenPointers} />
      </ScrollView>
    </MainLayout>
  )
}

export default RedeemScreen
