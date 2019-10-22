import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { VectorIcon } from "./"

declare var module

storiesOf("VectorIcon", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <VectorIcon name="rocket" size={30} color="black" />
      </UseCase>
    </Story>
  ))
