import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
// import { useStores } from "../../models/root-store"
import { color, spacing } from "../../theme"
import { NavigationStackScreenProps } from "react-navigation-stack"
import { Button } from "../../components/button"
import { Auth } from "aws-amplify"

export interface ProfileScreenProps extends NavigationStackScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}

const GO_TO_HOME: ViewStyle = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  borderColor: color.palette.purple,
  borderWidth: 1,
  borderRadius: 30,
  paddingVertical: spacing.medium,
  marginTop: spacing.medium,
}

const HOME_TEXT: TextStyle = {
  fontSize: 18,
  color: color.palette.purple,
}

const signOut = navigation => {
  Auth.signOut()
    .then(data => navigation.navigate("Auth"))
    .catch(err => console.log(err))
}

export const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = observer(props => {
  const { navigation } = props
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT}>
      <Button
        onPress={() => signOut(navigation)}
        style={GO_TO_HOME}
        children={<Text text="로그아웃" style={HOME_TEXT} />}
      />
    </Screen>
  )
})
