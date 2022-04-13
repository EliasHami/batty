import { useRouter } from 'next/router'
import { Link } from '.'

interface NavLinkProps {
  children: React.ReactNode,
  href: string,
  exact?: boolean,
  className?: string,
}

export default function NavLink({children, href, exact, ...props}: NavLinkProps) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if(isActive) {
    props.className += ' active'
  }

  return <Link href={href} {...props}>{children}</Link>
}