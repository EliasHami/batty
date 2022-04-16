import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type LinkProps = NextLinkProps & {
  children: React.ReactNode,
  href: string
}

export default function Link({href, children, ...props} : LinkProps) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

