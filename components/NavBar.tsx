import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <header className='bg-slate-200 padding-x py-8 w-full absolute z-10'>
      <nav>
        <a href='/'>
          <Image 
            src=''
            alt='Logo'
            width={130}
            height={30}
          />
        </a>
      </nav>
    </header>
  )
}

export default NavBar