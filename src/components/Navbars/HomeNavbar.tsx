import Link from 'next/link'
import React from 'react'
import LocaleSwitcher from '../LocaleSwitcher'

type Props = {}

const HomeNavbar = (props: Props) => {
  return (
    <header className='w-full bg-cyan-50 shadow-lg '>
      <nav className='mx-auto flex max-w-7xl items-center justify-between  py-4'>
        <Link href='/'>Home</Link>

        <LocaleSwitcher />
      </nav>
    </header>
  )
}

export default HomeNavbar
