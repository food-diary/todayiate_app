import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { PictureModel, PictureSnapshot, Picture } from "../picture/picture"
import { withEnvironment } from "../extensions"
import { flow } from "mobx"
import { GetPicturesResult } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const PicturesModel = types
  .model("Pictures")
  .props({
    pictures: types.optional(types.array(PictureModel), []),
    nextToken: types.optional(types.string, ""),
  })
  .extend(withEnvironment)
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    cleanPictures: () => {
      self.pictures.replace([])
    },
    savePictures: (pictureSnapshots: PictureSnapshot[]) => {
      const pictureModels: Picture[] = pictureSnapshots.map(c => PictureModel.create(c))
      self.pictures.replace(pictureModels)
    },
    saveNextToken: (nextToken: string) => {
      self.nextToken = nextToken
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    getPictures: flow(function*() {
      const result: GetPicturesResult = yield self.environment.api.getPictureList()

      if (result.kind === "ok") {
        self.savePictures(result.pictures)
        self.saveNextToken(result.nextToken)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    }),
  }))

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type PicturesType = Instance<typeof PicturesModel>
export interface Pictures extends PicturesType {}
type PicturesSnapshotType = SnapshotOut<typeof PicturesModel>
export interface PicturesSnapshot extends PicturesSnapshotType {}
