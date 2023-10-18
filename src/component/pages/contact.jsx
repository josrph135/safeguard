import { FaPhone, FaFacebook, FaTwitter } from 'react-icons/fa'
import { SiGmail} from 'react-icons/si'
import image from './image/2.webp'


const Contact = () => {
  return (
    <main id='Contact' className='flex md:flex-row-reverse h-screen py-20 flex-col item '>
        <section className='font-bold my-auto text-lg md:text-xl gap-6 flex flex-col'>
            <h1 className='header'>
                Contacts
            </h1>
            <h2 className='text'>
                No 22, behind Christ Apostolic Church Orisun Anu Ganmo, Ilorin, Kwara State.
            </h2>
            <h2 className='text flex flex-row items-center gap-3'>
                <span className='text-4xl text-primary-0'>
                    <FaPhone/>
                </span>
                <span>+2348102563985 <br /> +237085704201</span>
            </h2>
            <section className='flex flex-row justify-evenly md:text-3xl text-xl '>
                <a className='text-primary-0 duration-300' href="">
                    <FaFacebook/>
                </a>
                <a className='text-primary-0 duration-300' href="">
                    <FaTwitter/>
                </a>
                <a className='text-primary-0 duration-300' href="#Safeguardpetcare@gmail.com">
                    <SiGmail/>
                </a>
            </section>
            <h1 className='subhead'>
                Working Hours
            </h1>
            <h2 className='text'>
                24 hours 7days a week
            </h2>
            <section>

            </section>
        </section>
        <img src={image} alt="" className='md:w-2/3  h-1/2 md:h-[80%]'/>
    </main>
  )
}

export default Contact