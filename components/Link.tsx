import NextLink from 'next/link'

interface NavLinkProps {
  children: React.ReactNode,
  href: string,
}

export default function Link({href, children, ...props} : NavLinkProps) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

