import React from 'react'
import { Link } from 'react-router-dom'

function CoursesPage() {
  return (
    <div className='h-screen p-10 col-start-2 col-end-13 row-start-2 row-end-3 border-t-4 border-blue-900'>
      <div>
        <h2 className='text-gray-700 text-[50px] font-medium'>Courses</h2>
      </div>
      <div>
        <h3 className='text-gray-900 font-medium text-lg'>Courses @ Department of Knowledge and Information Science , Isfahan University of science</h3>
        <ul className='p-8 list-disc'>
          <li className='mt-2 text-gray-700 underline underline-offset-4 decoration-2 decoration-dotted hover:decoration-sky-500 hover:text-blue-700'><Link to='/courses/1'>Information Architecture</Link></li>
          <li className='mt-2 text-gray-700 underline underline-offset-4 decoration-2 decoration-dotted hover:decoration-sky-500 hover:text-blue-700'><Link to='/course/2'> Introduaction to Scientometrics</Link></li>
          <li className='mt-2 text-gray-700 underline underline-offset-4 decoration-2 decoration-dotted hover:decoration-sky-500 hover:text-blue-700'><Link to='/course/3'>Web Technology</Link></li>
          <li className='mt-2 text-gray-700 underline underline-offset-4 decoration-2 decoration-dotted hover:decoration-sky-500 hover:text-blue-700'><Link to='/courses/4'> Principles of Library Software Design</Link></li>
          <li className='mt-2 text-gray-700 underline underline-offset-4 decoration-2 decoration-dotted hover:decoration-sky-500 hover:text-blue-700'><Link to='/courses/5'>Database</Link> </li>
          <li className='mt-2 text-gray-700 underline underline-offset-4 decoration-2 decoration-dotted hover:decoration-sky-500 hover:text-blue-700'><Link to='/courses/6'>Management of Libraries Websits</Link> </li>
          <li className='mt-2 text-gray-700 underline underline-offset-4 decoration-2 decoration-dotted hover:decoration-sky-500 hover:text-blue-700'><Link to='/courses/7'>Designing of Digital Libraries</Link> </li>
        </ul>
      </div>
      <div>
        <h3 className='text-gray-900 font-medium text-lg'>Open Courses @ Department of Knowledge and Information Science , Isfahan University of science</h3>
      </div>
    </div>
  )
}

export default CoursesPage