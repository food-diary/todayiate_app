import * as React from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  ScrollView,
  Image,
  ImageStyle,
  Dimensions,
  View,
  FlatList,
  PermissionsAndroid,
  Platform,
} from "react-native"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import CameraRoll from "@react-native-community/cameraroll"
import { NavigationStackScreenProps } from "react-navigation-stack"
import { TouchableOpacity } from "react-native-gesture-handler"
import SafeAreaView from "react-native-safe-area-view"

export interface CameraRollScreenProps extends NavigationStackScreenProps<{}> {}

const IMAGE_SIZE = Dimensions.get("screen").width / 3

const ROOT: ViewStyle = {
  flex: 1,
  justifyContent: "flex-start",
  alignContent: "stretch",
}

const PHOTO_BOX: ImageStyle = {
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
}

const renderPhoto = ({ item }) => {
  if (!item.node) return

  return (
    <TouchableOpacity
      onPress={() => {
        // console.log(item)
      }}
    >
      <View>
        <Image style={PHOTO_BOX} source={{ uri: item.node.image.uri }} />
      </View>
    </TouchableOpacity>
  )
}

const checkAndroidPermission = async () => {
  try {
    const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    await PermissionsAndroid.request(permission)
    Promise.resolve()
  } catch (error) {
    Promise.reject(error)
  }
}

export const CameraRollScreen: React.FunctionComponent<CameraRollScreenProps> = observer(props => {
  const [photos, setPhotos] = React.useState([])
  const [pageInfo, setPageInfo] = React.useState({ endCursor: "", hasNextPage: true })
  const [refreshing, setRefreshing] = React.useState(false)

  const getCameraRollPhotos = async () => {
    if (Platform.OS === "android") {
      await checkAndroidPermission()
    }
    CameraRoll.getPhotos({
      first: 20,
      assetType: "Photos",
    })
      .then(r => {
        setPhotos(r.edges)
        setPageInfo({
          endCursor: r.page_info.end_cursor,
          hasNextPage: r.page_info.has_next_page,
        })
      })
      .catch(err => {
        console.log(`camera roll error: ${err}`)
      })
  }

  const onEndReachedList = () => {
    if (!pageInfo.hasNextPage) return

    CameraRoll.getPhotos({
      first: 20,
      after: pageInfo.endCursor,
      assetType: "Photos",
    })
      .then(r => {
        if (r.edges.length <= 0) return

        setPhotos([...photos, ...r.edges])
        setPageInfo({
          endCursor: r.page_info.end_cursor,
          hasNextPage: r.page_info.has_next_page,
        })
      })
      .catch(err => {
        console.log(`camera roll endReached error: ${err}`)
      })
  }

  React.useEffect(() => {
    getCameraRollPhotos()
  }, [refreshing])

  return (
    <SafeAreaView style={ROOT}>
      <FlatList
        data={photos}
        numColumns={3}
        renderItem={renderPhoto}
        extraData={{ extraDataForMobX: photos.length > 0 ? photos[0] : {} }}
        keyExtractor={item => `${JSON.stringify(item)}`}
        onRefresh={getCameraRollPhotos}
        onEndReached={onEndReachedList}
        refreshing={refreshing}
      />
    </SafeAreaView>
  )
})
