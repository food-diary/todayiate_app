import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, ImageStyle, View } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { NavigationStackScreenProps } from "react-navigation-stack"
import { Button } from "../../components/button"
import { Auth } from "aws-amplify"
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth"
import { fontStyle } from "../../theme/fontStyle"
import { Icon } from "../../components/icon"

export interface WelcomeScreenProps extends NavigationStackScreenProps<{}> {}

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  padding: spacing.medium,
  justifyContent: "center"
}

const HEADER_TEXT_WRAP: ViewStyle = {
  margin: 10,
  alignSelf: "center",
}

const HEADER_TEXT: TextStyle = {
  fontSize: fontStyle.headline1,
  fontWeight: "bold",
  color: color.palette.black,
}

const GO_TO_SIGNUP: ViewStyle = {
  backgroundColor: color.palette.lightPurple,
  borderRadius: 30,
  paddingVertical: spacing.medium,
  marginTop: spacing.medium,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
}

const SIGNUP_TEXT: TextStyle = {
  fontSize: fontStyle.headline4,
  color: color.palette.white,
}

const ICON: ImageStyle = {
  width: 200,
  height: 200,
  alignSelf: "center",
}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = observer(props => {
  return (
    <Screen style={ROOT}>
      <View style={HEADER_TEXT_WRAP}>
        <Text preset="header" text="식" style={HEADER_TEXT} />
        <Text preset="header" text="사" style={HEADER_TEXT} />
        <Text preset="header" text="일" style={HEADER_TEXT} />
        <Text preset="header" text="기" style={HEADER_TEXT} />
      </View>
      <Icon icon="logo" style={ICON} />
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
