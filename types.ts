export type RootStackParamList = {
  Actions: undefined
  Redeem: undefined
}
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
