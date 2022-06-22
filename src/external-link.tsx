import React from 'react'
import { ExternalLinkProps } from './types'

const ExternalLink = ({ children, to, title }: ExternalLinkProps) => (
  <a
    href={to}
    title={title}
    aria-label={title}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export default ExternalLink
