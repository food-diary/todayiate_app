import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { CameraScreen } from "../screens/camera-screen"

export const PhotoNavigator = createMaterialBottomTabNavigator({
  camera: { screen: CameraScreen },
})
