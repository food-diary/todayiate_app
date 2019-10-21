import { createBottomTabNavigator } from "react-navigation-tabs"
import { PhotoNavigator } from "./photo-navigator"
import { HomeNavigator } from "./home-navigator"

export const BottomNavigator = createBottomTabNavigator({
  homeStack: { screen: HomeNavigator },
  photoStack: { screen: PhotoNavigator },
})
