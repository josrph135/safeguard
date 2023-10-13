import {useTypewriter, Cursor} from 'react-simple-typewriter'


function App() {
 const [typeEffect] = useTypewriter({
  words: ['React Dev', 'Mobile Dev', 'Next js Dev'],
  loop: {},
  typeSpeed: 100,
  deleteSpeed: 40,
 })

  return (
    <div className='flex justify-center items-center text-2xl my-auto'>
      <h1>
        I'm a
        <span className='pl-4'>{typeEffect}</span>
      </h1>      
    </div>
    )
}

export default App