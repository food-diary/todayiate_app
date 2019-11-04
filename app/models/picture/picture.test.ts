import { PictureModel, Picture } from "./picture"

test("can be created", () => {
  const instance: Picture = PictureModel.create({
    id: "115e8a90-fca6-11e9-af3e-e127558135f5",
    userId: "108054415745483439004",
    username: "Google_108054415745483439004",
    bucket: "todayiate-usermeal-dev",
    region: "ap-northeast-2",
    key: "IMG_0024.JPG",
    uri: "ph://012FF53E-5AA2-4CDC-8C19-3A0189300907/L0/001"
  })

  expect(instance).toBeTruthy()
})