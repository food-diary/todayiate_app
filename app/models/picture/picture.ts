import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const PictureModel = types
  .model("Picture")
  .props({
    id: types.identifier,
    userId: types.maybe(types.string),
    username: types.maybe(types.string),
    bucket: types.maybe(types.string),
    region: types.maybe(types.string),
    key: types.maybe(types.string),
    uri: types.maybe(types.string),
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type PictureType = Instance<typeof PictureModel>
export interface Picture extends PictureType {}
type PictureSnapshotType = SnapshotOut<typeof PictureModel>
export interface PictureSnapshot extends PictureSnapshotType {}
