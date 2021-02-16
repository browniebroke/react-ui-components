import React, { FC } from 'react'
import { ExternalLinkProps } from './types'

const ExternalLink: FC<ExternalLinkProps> = ({ children, to, title }) => (
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
