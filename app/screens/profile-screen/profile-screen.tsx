import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
// import { useStores } from "../../models/root-store"
import { color } from "../../theme"
import { NavigationStackScreenProps } from "react-navigation-stack"

export interface ProfileScreenProps extends NavigationStackScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}

export const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT}>
      <Text preset="header" text="프로필" />
    </Screen>
  )
})
