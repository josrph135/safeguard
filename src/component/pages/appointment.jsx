import { useState } from 'react'
import image from './image/1.jpg'

const Appointment = () => {
    const [form, setForm] = useState({
        fname: "",
        phone: "",
        email: "",
        description: ""
    })

    function handlechange(event){
        event.preventDefault()
        const {name, value} = event.target
        setForm(prev => {
            return {
            ...prev,
            [name]: value
            }
        })
        form.description= ""
    }
  return (
    <div id='Appointment' className='grid h-screen grid-flow-row bg-black overflow-hidden items-center md:grid-flow-col w-full gap-10 md:gap-0'>
        <form action="https://getform.io/f/0e78ef00-9981-49bd-ae32-63dd74b73f15" method='POST' encType='multipart/form-data' className='w-4/5 mx-auto'>
            <h1 className='md:text-2xl text-xl text-center text-primary-0 font-bold pb-4'>
                Request Appointment
            </h1>
            <input 
                type="text" 
                name="fname"
                value={form.fname}
                onChange={handlechange}
                placeholder='NAME:'
                className='rounded-lg pl-4 py-2 text-sm sm:text-base md:text-xl placeholder:text-black placeholder:font-medium text-black bg-white/80 outline-none w-full mb-3'
            />
            <input 
                type="number" 
                name='phone'
                value={form.phone}
                onChange={handlechange}
                placeholder='PHONE:'
                className='rounded-lg pl-4 py-2 text-sm sm:text-base md:text-xl placeholder:text-black placeholder:font-medium text-black bg-white/80 outline-none w-full mb-3'
            />
            <input 
                type="email" 
                name='email'
                value={form.email}
                onChange={handlechange}
                placeholder='EMAIL:'
                className='rounded-lg pl-4 py-2 text-sm sm:text-base md:text-xl placeholder:text-black placeholder:font-medium text-black bg-white/80 outline-none w-full mb-3'
            />
            <textarea placeholder='DESCRIBE YOUR QUESTION' 
            name='description' value={form.description} onChange={handlechange}
            className='rounded-lg pl-4 py-2 text-sm sm:text-base md:text-xl placeholder:text-black placeholder:font-medium text-black bg-white/80 outline-none w-full' cols="30" rows="4"></textarea>
            <button className='w-full py-2 rounded-xl text-white bg-primary-0 text-lg font-semibold hover:bg-primary-0/70'>Submit</button>
        </form>
        <img src={image} className='w-full' alt="" />
    </div>
   
  )
}

export default Appointment