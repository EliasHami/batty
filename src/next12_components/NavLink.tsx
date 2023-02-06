"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Link } from '.'

type NavLinkProps = {
  children: React.ReactNode,
  href: string,
  exact?: boolean,
  className?: string,
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, exact, ...props }) => {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname?.startsWith(href)

  if (isActive) {
    props.className += ' active'
  }

  return <Link href={href} {...props}>{children}</Link>
}

export default NavLink