import React from 'react'

export default function Navbarmini(props) {
  return (
    <div>
    {/* ----------------------------------nav--------------------------------- */}
    <div className='flex m-auto backdrop-blur-sm bg-white/10  justify-between gap-[23.5rem] p-7  my-5  w-fit px-4 py-2 shadow-md shadow-black/40 text-white rounded-md '>
        <div>Welcome</div>
        <div>{props.name}</div>
        <div>Pic</div>
      </div>
  </div>
  )
}
