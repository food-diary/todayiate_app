import { PrimaryNavigator } from "./primary-navigator"
import { WelcomeScreen } from "../screens/welcome-screen"
import { AuthLoadingScreen } from "../screens/auth-loading-screen"
import { createSwitchNavigator } from "react-navigation"

export const RootNavigator = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoadingScreen,
    path: "authloading",
  },
  Auth: {
    screen: WelcomeScreen,
    path: "welcome",
  },
  App: { screen: PrimaryNavigator },
})
