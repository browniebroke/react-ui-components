import React, { FC, ReactChildren } from 'react'

interface ExternalLinkProps {
  to: string
  title: string
  children?: ReactChildren
}

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
