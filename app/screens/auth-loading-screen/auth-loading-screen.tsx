import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationStackScreenProps } from "react-navigation-stack"
import { Hub } from "aws-amplify"
import { load, save, remove } from "../../utils/storage"

export interface AuthLoadingScreenProps extends NavigationStackScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}

export const AuthLoadingScreen: React.FunctionComponent<AuthLoadingScreenProps> = observer(
  props => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          console.log(`signIn: ${JSON.stringify(data)}`)
          save("user", data)
          props.navigation.navigate("App")
          break
        case "signOut":
          console.log(`signOut`)
          remove("user")
          props.navigation.navigate("Auth")
          break
      }
    })

    const checkAuthentication = async () => {
      const user = await load("user")
      console.log("asyncStorage: ", user)
      props.navigation.navigate(user ? "App" : "Auth")
    }

    React.useEffect(() => {
      checkAuthentication()
    })

    return (
      <Screen style={ROOT}>
        <Text text="Auth Loading" />
      </Screen>
    )
  },
)
