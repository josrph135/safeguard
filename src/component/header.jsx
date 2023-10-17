import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect, useRef, useState } from 'react'
import Logo from './logo'
import { motion, useAnimation, useInView } from 'framer-motion'
const link = [
    {
        title: ["Home", "About", "Services", "Contact", "Appointment"]
    }
]
const Header = () => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref)
    const control = useAnimation("")
    useEffect(() => {
        if(isInView){
            control.start("visible")
        }
    },[isInView])
    
  return (
    <header className='bg-black w-full'>
        <header className={`text-white ${open? "w-full" : "lg:w-[80%] sm:w-[80%] w-[95%]"} mx-auto justify-between z-20 text-uppercase flex flex-row items-center bg-black py-4 ${open ? "relative" : "fixed"}`}>
        
        <motion.div
            initial={"hidden"}
            ref={ref}
            animate={control}
            transition={{duration: 0.9, delay: 0.4}}
            variants={{hidden:{opacity: 0, y:-45}, visible: {opacity: 1, y: 0}}}
        >
            <Logo />
        </motion.div>
        
        <nav className='hidden lg:block'>
            {link.map((link, i) => 
                <ul className='flex flex-row divide-x-2 divide-white md:text-xl  font-semibold ' key={i}>
                    {link.title.map((link,i) => 
                    <li className='px-4' key={i}><a className='hover:border-b-4 hover:border-primary-0 pb-1' href={`#${link}`}>{link}</a></li>)}
                </ul>
            )}
        </nav>
        <button onClick={() => setOpen(open => !open)} className='text-white hover:text-gray-100/90 block lg:hidden mx-2 pr-4'>
            <GiHamburgerMenu  size={30}/>
        </button>
        <section className={`fixed ${open ? null : "hidden"} bg-black z-50 top-0 left-0 right-0`}>
            <nav className={` h-fit md:hidden  absolute w-screen bg-black`}>
            <ul className='flex flex-col pt-9 text-lg text-white  justify-center'>
                {link.map((link) => link.title.map((title, i) =>
                    <a  href={`#${title}`} key={i} onClick={() => setOpen(false)} className='cursor-pointer hover:bg-primary-0 tracking-widest hover:scale-x-110 hover:pl-20 duration-300 p-2 pl-8 font-semibold pb-4 pt-4'><li>{title}</li></a>
                ))}
                
                </ul> 
                {open && <p onClick={() => setOpen(false)} className='fixed top-2 right-8 font-bold text-2xl cursor-pointer hover:rotate-180 delay-200 duration-300'>
                X
                </p>}
            </nav>
            
        </section>
        

    </header>
    </header>
    
  )
}

export default Header