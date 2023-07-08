import React from 'react'
import cooperative1 from '../assets/cooperative1.jpg'

const Landing = () => {
  return (
    <div className='w-full grid grid-cols-2 h-[100vh] bg-primary'>
        <div>
            <img src={cooperative1} className='h-full w-full bg-center object-cover' alt="" />
        </div>
        <div className='p-6 flex justify-center items-center '>
            <div className="flex flex-col w-[60%] items-center text-center">
                <h1 className='font-bold text-3xl mb-8 title'>Online Cooperative System</h1>
                <p className='leading mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut fuga illum corrupti ducimus eaque eligendi.</p>
                <button className='bg-black text-white p-4 mb-4 w-full rounded-2xl shadow-2xl font-bold'>Register</button>
                <div>
                    <p>Already have an account? <span className='font-bold cursor-pointer'><a href="">Login</a></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing