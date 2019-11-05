import { createStackNavigator } from "react-navigation"
import { BottomNavigator } from "./bottom-navigator"
import photoNavigator from "./photo-navigator"

export const PrimaryNavigator = createStackNavigator(
  {
    bottomTab: { screen: BottomNavigator },
    photoStack: { screen: photoNavigator },
  },
  {
    headerMode: "none",
    initialRouteName: "bottomTab"
  },
)

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["home"]
