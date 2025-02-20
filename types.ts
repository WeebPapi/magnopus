export type RootStackParamList = {
  Actions: undefined
  Redeem: undefined
}
export type IAction = {
  label: string
  pointsValue: number
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
