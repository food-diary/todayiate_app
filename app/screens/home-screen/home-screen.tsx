import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
// import { useStores } from "../../models/root-store"
import { color } from "../../theme"
import { NavigationStackScreenProps } from "react-navigation-stack"

export interface HomeScreenProps extends NavigationStackScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT}>
      <Text preset="header" tx="homeScreen.header" />
    </Screen>
  )
})
