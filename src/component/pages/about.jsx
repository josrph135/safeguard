import image1 from './image/1.webp'
import image2 from './image/2.webp'
import image3 from './image/1.webp'
const aboutUs = [
    {
        image: image1,
        title: "Who we are",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, nobis inventore! Iusto dignissimos nisi rem minus molestias eligendi maiores libero!"
    },
    {
        image: image2,
        title: "What we do",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, nobis inventore! Iusto dignissimos nisi rem minus molestias eligendi maiores libero!"
    },
    {
        image: image3,
        title: "How we work",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, nobis inventore! Iusto dignissimos nisi rem minus molestias eligendi maiores libero!"
    },
]
const About = () => {
  return (
    <main>
        <section id="About" className="flex h-[100vh] scroll-mt-16 gap-12 flex-col justify-center mt-44 sm:mt-0 items-center">
            <header className="flex w-2/3 flex-col justify-center items-center gap-4  sm:pt-0 text-center">
                <h1 className="header">
                    Get to know us more
                </h1>
                <p className="text">
                    Our team of experienced veterinarians work with love and care to ensure the optimal health of your pet and support it at every stage
                </p>
            </header>
            <ul className="grid grid-flow-row md:grid-flow-col text-center gap-12 justify-between">
            {aboutUs.map((list, i) => 
                <section key={i}
                        className="flex flex-col gap-4 justify-center items-center"
                >
                    <img src={list.image} alt="" className='w-40' />
                    <h1 className='subhead'>
                        {list.title}
                    </h1>
                    <p className='text'>
                        {list.text}
                    </p>
                </section>
            )}
            </ul>
        </section>
        <section className='relative h-[100vh] flex flex-row items-center'>
                <em className='z-10 md:w-[40%] w-[50%] font-bold md:text-xl lg:text-2xl text-lg text-left tracking-wide bg-black/50 rounded-md'>
                    "Pets are humanising. they remind us we have an obligation and responsibility to preserve and nurture and care for all life." <br /><br /> <em className='lg:tracking-[12px] tracking-[6px] font-normal capitalize'>james cromwell</em>
                </em>
                <img src={image1} className='absolute w-[80%] -right-10' alt="" />
        </section>
    </main>
    
  )
}

export default About