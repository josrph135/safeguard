import { useEffect } from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'


/* function App() {
 const [typeEffect] = useTypewriter({
  words: ['React Dev', 'Mobile Dev', 'Next js Dev'],
  loop: {},
  typeSpeed: 100,
  deleteSpeed: 40,
 }) */

/* function Typo(){
  const [type] = useTypewriter({
    typeSpeed: 200,
    deleteSpeed: 100,
    words: ["young dev", "social thinker","philosopher", "philanthropist"],
    loop: {}
  })
  return (
    <div className='flex justify-center items-center text-2xl my-auto'>
      <h1>
        I'm a
        <span className='pl-4'>{type}</span>
      </h1>      
    </div>
    )
}

export default Typo */

function Typo(){
  const [typeEffect] = useTypewriter({
    words: ["Frontend developer", "Programmer", "social thinker"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  })
  return(
    <div>
      <section>
        I'm a <span>{typeEffect}</span>
      </section>
    </div>
  )
}export default Typo