import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import IconFacebook from '../icons/IconFacebook';
import IconInstagram from '../icons/IconInstagram';
import Icontwitter from '../icons/Icontwitter'

function MenueBar({ status }) {
    if (status === 'open') {
        return (
            <div className='xl:w-1/12 lg:w-2/12 h-screen bg-gray-200 flex flex-col fixed justify-around px-2'>
                <div>
                    <p className='text-gray-800 text-2xl font-medium underline underline-offset-8 decoration-blue-900 decoration-2'>Menue</p>
                </div>
                <div className=' flex flex-col gap-y-5'>
                    <NavLink to="" className={({ isActive, isPending }) =>
                        isActive ? ' text-gray-900 font-bold md:text-m m-1 border-b border-blue-900' : isPending ? ' text-gray-600 m-1 md:text-s' : ' text-gray-600 md:text-s m-1'}>
                        HomePage
                    </NavLink>
                    <NavLink to="/biography" className={({ isActive, isPending }) =>
                        isActive ? ' text-gray-900 font-bold md:text-m m-1 border-b border-blue-900' : isPending ? ' text-gray-600 m-1 md:text-s' : ' text-gray-600 md:text-s m-1'}>
                        Biography
                    </NavLink>
                    <NavLink to="/publications" className={({ isActive, isPending }) =>
                        isActive ? ' text-gray-900 font-bold md:text-m m-1 border-b border-blue-900' : isPending ? ' text-gray-600 m-1 md:text-s' : ' text-gray-600 md:text-s m-1'}>
                        Publications
                    </NavLink>
                    <NavLink to="/courses" className={({ isActive, isPending }) =>
                        isActive ? ' text-gray-900 font-bold md:text-m m-1 border-b border-blue-900' : isPending ? ' text-gray-600 m-1 md:text-s' : ' text-gray-600 md:text-s m-1'}>
                        Courses
                    </NavLink>
                    <NavLink to="/contacts" className={({ isActive, isPending }) =>
                        isActive ? ' text-gray-900 font-bold md:text-m m-1 border-b border-blue-900' : isPending ? ' text-gray-600 m-1 md:text-s' : ' text-gray-600 md:text-s m-1'}>
                        Contacts
                    </NavLink>
                </div>
                <div className='flex justify-evenly'>
                    <Link to='https://www.facebook.com/' className=' shadow-lg rounded-full'>
                        <IconFacebook />
                    </Link>
                    <Link to='https://www.instagram.com' className=' shadow-lg rounded-full'>
                        <IconInstagram />
                    </Link>
                    <Link to='https://www.x.com' className=' shadow-lg rounded-full'>
                        <Icontwitter />
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default MenueBar