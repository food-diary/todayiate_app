import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, Linking, Alert } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
// import { useStores } from "../../models/root-store"
import { color, spacing } from "../../theme"
import { NavigationStackScreenProps } from "react-navigation-stack"
import { Button } from "../../components/button"
import InAppBrowser from "react-native-inappbrowser-reborn"

export interface WelcomeScreenProps extends NavigationStackScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.lightPurple,
  padding: spacing.medium,
}

const HEADER_TEXT: TextStyle = {
  color: color.palette.white,
  paddingVertical: spacing.large,
  marginTop: spacing.huge,
}

const GO_TO_SIGNUP: TextStyle = {
  backgroundColor: color.palette.white,
  borderColor: color.palette.white,
  borderWidth: 1,
  borderRadius: 30,
  paddingVertical: spacing.medium,
  marginTop: spacing.medium,
}

const SIGNUP_TEXT: TextStyle = {
  fontSize: 18,
  color: color.palette.purple,
}

const GO_TO_HOME: ViewStyle = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  borderColor: color.palette.white,
  borderWidth: 1,
  borderRadius: 30,
  paddingVertical: spacing.medium,
  marginTop: spacing.medium,
}

const HOME_TEXT: TextStyle = {
  fontSize: 18,
}

const openLink = async () => {
  try {
    const url = 'https://www.google.com'
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url)
      Alert.alert(JSON.stringify(result))
    }
    else Linking.openURL(url)
  } catch (error) {
    Alert.alert(error.message)
  }
}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = observer(props => {
  const { navigation } = props
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT}>
      <Text preset="header" text="식사일기에 오신 것을 환영합니다." style={HEADER_TEXT} />
      <Button
        onPress={() => openLink()}
        style={GO_TO_SIGNUP}
        children={<Text text="구글 계정으로 로그인" style={SIGNUP_TEXT} />}
      />
      <Button
        onPress={() => navigation.push("signup")}
        style={GO_TO_HOME}
        children={<Text text="게스트로 사용해보기" style={HOME_TEXT} />}
      />
    </Screen>
  )
})
