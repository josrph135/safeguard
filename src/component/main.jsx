import { useEffect, useRef } from 'react'
import image from '../assets/4.webp'
import { inView, useAnimation, useInView } from 'framer-motion'
import { motion } from 'framer-motion'

const Main = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const control = useAnimation("")
    useEffect(() => {
		if(isInView){
			control.start("visible")
		}
	}, [isInView])


  return (
    
    <main id='Home' className='flex h-screen flex-col gap-10 md:gap-20 pt-20  relative'>
        <section className='flex flex-col'>
            <img className='absolute md:w-[70%] top-12 right-10 h-[70%] md:h-[100%]' src={image} alt="" />
            
            <h1 className='md:text-3xl text-xl pb-2 md:gap-2 md:leading-10 tracking-widest flex flex-col z-10 pt-44 font-black'>
                <motion.div
                    variants={{hidden: {opacity: 0, x:-75}, visible: {opacity: 1, x:0}}}
					initial={"hidden"}
					ref={ref}
					animate={control}
					transition={{duration: 0.9, delay:0.4}}
                    className='z-10 flex flex-col gap-3'
                >
                    <span className=''>
                        We are here
                    </span>
                    <span>
                        to help your pet
                    </span>     
                </motion.div>              
                
            </h1>
            <span className='md:text-xl z-10 text-lg font-medium pt-2'>
                vetenary care of full circle
            </span>
        </section>
        <motion.div
            ref={ref}
            initial={"hidden"}
            transition={{delay: 0.4, duration: 0.7}}
            variants={{hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0}}}
            animate={control}
            className='z-10'
        >
            <a className='px-6 z-10 py-3 w-fit  md:text-lg rounded-full bg-primary-0/50 text-base border duration-500 hover:bg-white hover:text-slate-700 capitalize tracking-[2px] font-bold' href="#Appointment">Request appointment</a>
        </motion.div>
        
    </main>
  )
}

export default Main