import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
// import { useStores } from "../../models/root-store"
import { color } from "../../theme"
import { NavigationStackScreenProps } from "react-navigation-stack"

export interface SignupScreenProps extends NavigationStackScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}

export const SignupScreen: React.FunctionComponent<SignupScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="회원가입" />
    </Screen>
  )
})
