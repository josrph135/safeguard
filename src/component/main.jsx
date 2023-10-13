import image from '../assets/4.jpg'

const Main = () => {
  return (
    <main id='Home' className='flex h-screen flex-col gap-10 md:gap-20 pt-20 relative'>
        <section className='flex flex-col'>
            <img className='absolute md:w-4/5 top-4 -right-10 h-[90%]' src={image} alt="" />
            <h1 className='md:text-4xl text-2xl pb-2 md:gap-2 md:leading-10 tracking-widest flex flex-col z-10 pt-44 font-black'>
                <span>
                    we are here
                </span>                     
                <span>
                    to help your pet
                </span>
            </h1>
            <span className='md:text-xl z-10 font-medium'>
                vetenary care of full circle
            </span>
        </section>

        <a className='px-6 z-10 py-3 w-fit  md:text-xl rounded-full bg-white/40' href="#Appointment">Request appointment</a>
    </main>
  )
}

export default Main