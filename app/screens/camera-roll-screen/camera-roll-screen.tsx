import * as React from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  Image,
  ImageStyle,
  Dimensions,
  View,
  FlatList,
  PermissionsAndroid,
  Platform,
} from "react-native"
import CameraRoll from "@react-native-community/cameraroll"
import { NavigationStackScreenProps } from "react-navigation-stack"
import { TouchableOpacity } from "react-native-gesture-handler"
import SafeAreaView from "react-native-safe-area-view"
import { API, graphqlOperation, Storage } from "aws-amplify"
import uuid from "react-native-uuid"
import { load } from "../../utils/storage"
import * as mutations from "../../graphql/mutations"
import awsconfig from "../../../aws-exports"

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

const uploadToStorage = async (uri, filename) => {
  const response = await fetch(uri)

  const blob = await response.blob()

  try {
    return await Storage.put(filename, blob, {
      contentType: "image/jpeg",
      level: "public",
    })
  } catch (e) {
    console.log(e)
  }
}

const renderPhoto = ({ item }) => {
  if (!item.node) return

  return (
    <TouchableOpacity
      onPress={async () => {
        console.log(item.node.image.uri)
        const user = await load("user")
        const id = uuid.v1()
        const key = await uploadToStorage(item.node.image.uri, item.node.image.filename)
        const data = {
          id,
          userId: user.username.split("_")[1],
          username: user.username,
          file: {
            bucket: awsconfig.aws_user_files_s3_bucket,
            region: awsconfig.aws_user_files_s3_bucket_region,
            key,
            uri: item.node.image.uri,
          },
        }
        try {
          await API.graphql(
            graphqlOperation(mutations.createPicture, {
              input: data,
            }),
          )
        } catch (e) {
          console.log(e)
        }
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
