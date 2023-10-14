import image1 from './image/1.jpg'
import image2 from './image/2.jpg'
import image3 from './image/1.jpg'
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
    <main id="About" className="flex h-[100vh] scroll-mt-16 gap-12 flex-col justify-center mt-44 sm:mt-0 items-center">
        <header className="flex w-2/3 flex-col justify-center items-center gap-4  sm:pt-0 text-center">
            <h1 className="text-2xl text-primary-0 font-bold ">
                Get to know us more
            </h1>
            <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam beatae laboriosam illum, ex, labore quos corporis aut possimus temporibus a enim autem deleniti reprehenderit, impedit at suscipit. Optio, eveniet velit!
            </p>
        </header>
        <ul className="grid grid-flow-row md:grid-flow-col text-center gap-12 justify-between">
            {aboutUs.map((list, i) => 
                <section key={i}
                        className="flex flex-col gap-4 justify-center items-center"
                >
                    <img src={list.image} alt="" className='w-40' />
                    <h1 className='text-lg md:text-xl font-semibold'>
                        {list.title}
                    </h1>
                    <p>
                        {list.text}
                    </p>
                </section>
            )}
        </ul>
    </main>
  )
}

export default About