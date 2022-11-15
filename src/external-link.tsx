import React from 'react'
import { ExternalLinkProps } from './types'

const ExternalLink = ({ children, to, title, rel }: ExternalLinkProps) => {
  let relArray = ['noopener', 'noreferrer']
  if (rel !== undefined) {
    relArray = [...relArray, ...rel.split(' ')]
  }
  return (
    <a
      href={to}
      title={title}
      aria-label={title}
      target="_blank"
      rel={relArray.join(' ')}
    >
      {children}
    </a>
  )
}

export default ExternalLink
