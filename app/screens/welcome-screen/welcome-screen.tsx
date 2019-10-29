import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { NavigationStackScreenProps } from "react-navigation-stack"
import { Button } from "../../components/button"
import { Auth } from "aws-amplify"
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth"

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

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = observer(props => {
  return (
    <Screen style={ROOT}>
      <Text preset="header" text="식사일기에 오신 것을 환영합니다." style={HEADER_TEXT} />
      <Button
        onPress={() =>
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google,
          })
        }
        style={GO_TO_SIGNUP}
        children={<Text text="구글 계정으로 로그인" style={SIGNUP_TEXT} />}
      />
    </Screen>
  )
})
