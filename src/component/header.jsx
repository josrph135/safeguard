import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import Logo from './logo'

const link = [
    {
        title: ["Home", "About", "Services", "Contact", "Appointment"]
    }
]
const Header = () => {
    const [open, setOpen] = useState(false)
    
  return (
    <header className={`text-white ${open? "w-full" : "lg:w-[75%] sm:w-[80%] w-[95%]"} mx-auto justify-between z-20 text-uppercase flex flex-row items-center bg-black py-4 ${open ? "relative" : "fixed"}`}>
        <Logo />
        <nav className='hidden lg:block'>
            {link.map((link, i) => 
                <ul className='flex flex-row divide-x-2 divide-white font-semibold ' key={i}>
                    {link.title.map((link,i) => 
                    <li className='px-4' key={i}><a className='hover:underline' href={`#${link}`}>{link}</a></li>)}
                </ul>
            )}
        </nav>
        <button onClick={() => setOpen(open => !open)} className='text-white hover:text-gray-100/90 block lg:hidden mx-2 pr-4'>
            <GiHamburgerMenu  size={30}/>
        </button>
        <section className='fixed bg-black z-50 top-0 left-0 right-0'>
            <nav className={`${open ? null : "hidden"} h-fit md:hidden  absolute w-screen bg-black`}>
            <ul className='flex flex-col pt-9 text-lg text-white  justify-center'>
                {link.map((link) => link.title.map((title, i) =>
                    <a  href={`#${title}`} key={i} onClick={() => setOpen(false)} className='cursor-pointer hover:bg-slate-700 tracking-widest hover:scale-x-110 hover:pl-20 duration-300 p-2 pl-8 font-semibold pb-4 pt-4'><li>{title}</li></a>
                ))}
                
                </ul> 
            </nav>
            {open && <p onClick={() => setOpen(false)} className='fixed top-2 right-8 font-bold text-2xl cursor-pointer hover:rotate-180 delay-200 duration-300'>
                X
            </p>}
        </section>
        

    </header>
  )
}

export default Header