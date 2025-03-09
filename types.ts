export type RootStackParamList = {
  Actions: undefined
  Redeem: undefined
}
export type IAction = {
  label: string
  pointsValue: number
}

export type IPrize = {
  label: string
  pointsCost: number
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
