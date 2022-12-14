import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

function Banner({text}) {
  return (
    <div className='banner h-64 text-slate-100 flex flex-col justify-center text-center'>
        <h2 className=' text-5xl mb-4 '>
            {text}
        </h2>

        <p>
            <Link to='/' className=' hover:text-slate-300 '>Home </Link>&#8594;  {text}
        </p>
    </div>
  )
}

export default Banner