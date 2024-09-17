import React from 'react'
import HeaderComponent from '../components/Header.Component'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'


function HomePage() {
  return (
    <div className=' bg-slate-50 grid grid-cols-12'>
      <NavBar />
      <div className='w-full col-start-2 col-end-13 row-span-1 row-end-2'>
        <HeaderComponent />
      </div>
      <Outlet />
    </div>
  )
}

export default HomePage