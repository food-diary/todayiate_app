import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { CameraScreen } from "../screens/camera-screen"
import { createStackNavigator } from "react-navigation-stack"
import { CameraRollScreen } from "../screens/camera-roll-screen"
import { TabBarIcon } from "../components/tab-bar-icon"

const PhotoNavigator = createMaterialBottomTabNavigator(
  {
    camera: { screen: CameraScreen },
    cameraRoll: { screen: CameraRollScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        let name = "camera"
        if (navigation.state.routeName === "cameraRoll") {
          name = "images"
        }
        return TabBarIcon({ focused, tintColor, name })
      },
      labeled: false,
      activeColor: "#f0edf6",
      inactiveColor: "#3e2465",
    }),
  },
)

export default createStackNavigator(
  {
    PhotoNavigator,
  },
  {
    headerMode: "none",
  },
)
