// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const LandingBigButtons = Template.bind({})

LandingBigButtons.args = {
  title: 'تست دکمه',
  type: 'LandingBigButtons',
}

export const LandingSmallButtons = Template.bind({})
LandingSmallButtons.args = {
  title: 'تست دکمه',
  type: 'LandingSmallButtons',
}
