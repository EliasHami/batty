import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

type LinkProps = NextLinkProps & React.HTMLProps<HTMLAnchorElement> & {
  children: React.ReactNode,
  href: string
}

const Link:React.FC<LinkProps> = ({href, children, ...props}) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

export default Link 
