import React from 'react'

export const Best = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-6 p-10 bg-(--primary-color) text-(--text-color) lg:flex-row lg:space-x-10 lg:space-y-0'>
        <div className='space-y-4 max-w-lg text-center lg:text-left'>
            <h3 className='font-bold capitalize text-2xl'>
                The best Airline plug around you
            </h3>
            <p className='font-medium capitalize text-md '>
                Fly with confidence: we provide award-winning services and guarantee a travel experience built on proactive, personalized customer care!
            </p>
        </div>
        <div>
            <img src="https://i.pinimg.com/1200x/13/19/b6/1319b614cf2e3ed4d145c13d68a6d99f.jpg" alt="best airlines" className='rounded-2xl ' />
        </div>
    </div>
  )
}
