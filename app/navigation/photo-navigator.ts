import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { CameraScreen } from "../screens/camera-screen"
import { createStackNavigator } from "react-navigation-stack"
import { CameraRollScreen } from "../screens/camera-roll-screen"

const PhotoNavigator = createMaterialBottomTabNavigator({
  camera: { screen: CameraScreen },
  cameraRoll: { screen: CameraRollScreen },
})

export default createStackNavigator(
  {
    PhotoNavigator,
  },
  {
    headerMode: "none",
  },
)
