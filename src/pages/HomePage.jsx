import React from 'react'
import HeaderComponent from '../components/Header.Component'
//import { Outlet } from 'react-router-dom'
//import NavBar from '../components/NavBar'
import UserPage from '../pages/UserPage'
import BiographyPage from '../components/BiographyPage.component';
import PublicationsPage from '../components/PublicationsPage.Component';
import CoursesPage from '../components/CoursesPage.Component';
import ContactsPage from '../components/ContactsPage.Component'


function HomePage() {
  return (
    <div className=' bg-slate-100'>
      <div className='w-full'>
        <HeaderComponent />
      </div>
      <div id='person'>
        <UserPage/>
      </div>
      <div id='biography'>
        <BiographyPage/>
      </div>
      <div id='publication'>
        <PublicationsPage/>
      </div>
      <div id='courses'>
        <CoursesPage/>
      </div>
      <div id='contacts'>
        <ContactsPage/>
      </div>
    </div>
  )
}

export default HomePage