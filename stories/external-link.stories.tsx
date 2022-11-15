import React from 'react'
import { Meta, Story } from '@storybook/react'

import { ExternalLink } from '../src'

const meta: Meta = {
  title: 'Example/ExternalLink',
  component: ExternalLink,
}

export default meta

interface ExternalLinkStoryArgs {
  to: string
  title: string
  content: string
  rel?: string
}

const Template: Story<ExternalLinkStoryArgs> = (args) => {
  return (
    <ExternalLink to={args.to} title={args.title} rel={args.rel}>
      {args.content}
    </ExternalLink>
  )
}

export const DefaultLink = Template.bind({})
DefaultLink.args = {
  to: 'https://browniebroke.com/blog/',
  title: 'My Blog',
  content: 'My Blog',
}

export const WithRelLink = Template.bind({})
WithRelLink.args = {
  to: 'https://browniebroke.com',
  title: 'My personal Site',
  content: 'My Site',
  rel: 'me',
}
