import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex w-full h-[80px] justify-center items-center bg-point-bg border mb-5' >
        <ul className='flex flex-row gap-10 text-xl font-semibold leading-[24px]'>
          <li><Link to="/addhotel" className='hover:opacity-70'>Otel Ekle</Link></li>
          <li><Link to="/listhotel" className='hover:opacity-70'>Otel Listele</Link></li>
        </ul>
      </div>
  )
}

export default Header