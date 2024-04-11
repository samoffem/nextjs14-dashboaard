'use client'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import styles from './menulink.module.css'
import { usePathname } from 'next/navigation'

const Menulink = ({icon, title, path}: {icon: JSX.Element, title: string, path: string}) => {
    const pathname = usePathname()
  return (
    <Link href={path} className={`${styles.container} ${pathname === path && styles.active}`}>
        <span>{icon}</span>
        <span>{title}</span>
    </Link>
  )
}

export default Menulink