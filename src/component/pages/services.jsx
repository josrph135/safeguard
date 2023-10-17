import image from './image/1.webp'

const ourService = [
    {
        image: image,
        title: "products",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex debitis laborum ratione voluptatum iste consequuntur error nisi nam pariatur?"
        
    },
    {
        image: image,
        title: "grooming",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex debitis laborum ratione voluptatum iste consequuntur error nisi nam pariatur?"
    },
    {
        image: image,
        title: "vaccination",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex debitis laborum ratione voluptatum iste consequuntur error nisi nam pariatur?"
    }
]
const Services = () => {
  return (
    <main id='Services' className='h-fit py-16 mt-32 md:mt-20 scroll-mt-12 flex flex-col gap-8'>
        <header className='flex justify-center w-2/3 mx-auto flex-col text-center gap-2 items-center'>
            <h1 className='header'>
                Services we offer
            </h1>
            <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae possimus, repellendus iusto deserunt numquam aspernatur rem minus nobis ullam.
            </p>
        </header>
        
        <ul className="grid grid-flow-row md:grid-flow-col text-center gap-12 justify-between">
            {ourService.map((list, i) => 
                <section key={i}
                        className="flex flex-col gap-4 justify-center items-center"
                >
                    <img src={list.image} alt="" className='w-40' />
                    <h1 className='subhead capitalize'>
                        {list.title}
                    </h1>
                    <p className='text'>
                        {list.text}
                    </p>
                </section>
            )}
        </ul>
    </main>
  )
}

export default Services