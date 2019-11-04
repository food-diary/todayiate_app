import { PicturesModel, Pictures } from "./pictures"

test("can be created", () => {
  const instance: Pictures = PicturesModel.create({})

  expect(instance).toBeTruthy()
})