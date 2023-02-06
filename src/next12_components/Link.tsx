import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

type LinkProps = NextLinkProps & {
  children: React.ReactNode,
  href: string,
  className?: string
}

const Link:React.FC<LinkProps> = ({href, className, children}) => {
  return (
    <NextLink className={className} href={href}>
      {children}
    </NextLink>
  )
}

export default Link 
