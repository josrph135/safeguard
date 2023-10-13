import React from 'react'
import Logo from './logo'

const link = [
    {
        title: ["Home", "About", "Services", "Contact", "Appointment"]
    }
]
const Header = () => {
    
  return (
    <header className='text-white sticky text-uppercase flex flex-row justify-between'>
        <Logo />
        <nav className='hidden md:block'>
            {link.map((link, i) => 
                <ul className='flex flex-row divide-x-2 divide-white font-semibold ' key={i}>
                    {link.title.map((link,i) => 
                    <li className='px-4' key={i}><a className='' href={`#${link}`}>{link}</a></li>)}
                </ul>
            )}
        </nav>
    </header>
  )
}

export default Header