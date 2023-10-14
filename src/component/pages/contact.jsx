import image from './image/2.jpg'

const Contact = () => {
  return (
    <main id='Contact' className='flex md:flex-row-reverse h-screen py-20 flex-col item '>
        <section className='font-bold my-auto text-lg md:text-xl gap-6 flex flex-col'>
            <h1 className='text-xl text-primary-0 md:text-2xl'>
                Contacts
            </h1>
            <h2>
                Irewolede street. <br /> Ita-olodan, Gaa-akanbi, Ilorin.
            </h2>
            <h2>
                07037770479
            </h2>
            <h1 className='text-x pt-6 l md:text-2xl'>
                Working Hours
            </h1>
            <h2>
                24 hours 7days a week
            </h2>
        </section>
        <img src={image} alt="" className='md:w-2/3 h-2/3'/>
    </main>
  )
}

export default Contact