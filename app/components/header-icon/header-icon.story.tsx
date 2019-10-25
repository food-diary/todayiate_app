import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { HeaderIcon } from "./"
import { spacing } from "../../theme"

declare var module

storiesOf("HeaderIcon", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <HeaderIcon
          name="home"
          color="#efefef"
          style={{ padding: spacing.tiny, marginLeft: spacing.tiny }}
        />
      </UseCase>
    </Story>
  ))
