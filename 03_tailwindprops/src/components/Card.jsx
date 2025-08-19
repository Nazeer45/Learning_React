import React from 'react'

function Card({name, btntxt="Visit Now"}) { // destructuring - name, btntxt default value is Visit Now, if not provided
    console.log(name, btntxt)
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="image" className="z-0 h-full w-full rounded-md object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{name}</h1>
            <p className="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, consectetur. Non harum animi expedita ullam.</p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                {btntxt}
            </button>
        </div>
    </div>
  )
}

export default Card
