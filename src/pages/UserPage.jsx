import { useState, useEffect } from 'react'
import IconBiography from '../icons/IconBiography';
import IconArticle from '../icons/IconArticle'
import IconCourse from '../icons/IconCourse';
import IconContacts from '../icons/IconContacts';
import { Link } from 'react-router-dom';

function UserPage() {

  const [newQoute, setNewQoute] = useState('');
  const [aouther, setAouther] = useState('');

  const qoutefn = async () => {
    const res = await fetch('https://api.quotable.io/random');
    const qoute = await res.json();
    return (setNewQoute(qoute.content), setAouther(qoute.author))
  }

  useEffect(() => {
    qoutefn();
  }, []);

  return (
    <div className='flex flex-col col-start-2 col-end-13 row-start-2 row-end-3'>
      <div className='border-t-4 border-blue-950 flex lg:flex-row lg:gap-y-0  sm-2x:flex-col sm-2x:gap-y-20 justify-between xl:p-20 lg:p-10 md:p-5 border-b-2'>
        <div id='profile-info' className='flex flex-col justify-around w-[500px] lg:order-1 sm-2x:order-2 lg:gap-y-0 sm-2x:gap-y-10 sm-2x:w-fit'>
          <p className='font-medium'>Welcome to the Homepage of</p>
          <h1 className='text-[36px] font-medium text-blue-900'>Ali Mansouri</h1>
          <h3 className='text-xl'>Associate Professor <br /> Department of Knowledge and Information Science</h3>
          <h4 className='text-gray-800 '>"{newQoute}"</h4>
          <h6 className='text-sm font-medium text-gray-600'>{aouther}</h6>
        </div>
        <div id='image-self' className=' lg:order-2 sm-2x:order-1'>
          <img src="/images/Personal.jpg" alt="profile" className=' rounded-2xl xl:min-w-[500px] xl:min-h-[500px] lg:w-[350px] lg:h-[350px] sm:w-[370px] sm:h-[370px] sm:mx-auto' />
        </div>
      </div>

      <div className='grid md:grid-rows-2 md:grid-cols-2 sm:grid-cols-1 sm:grid-rows-4 gap-y-10 place-items-baseline mt-10 mx-3'>
        <div className='flex justify-center items-center gap-10'>
          <IconBiography />
          <div>
            <Link to="/biography" className='text-xl font-medium text-gray-800 hover:text-blue-600'>BIOGRAPHY</Link>
            <p className='text-gray-700'>Personal Information</p>
            <p className='text-gray-700'>Educational Background</p>
            <p className='text-gray-700'>Research Interests</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-10 '>
          <IconArticle />
          <div>
            <Link to='/publications' className='text-xl font-medium text-gray-800 hover:text-blue-600'>PUBLICATIONS</Link>
            <p className='text-gray-700'>Theses</p>
            <p className='text-gray-700'>Conference Papers</p>
            <p className='text-gray-700'>Talks</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-10'>
          <IconCourse />
          <div>
            <Link to='/courses' className='text-xl font-medium text-gray-800 hover:text-blue-600'>COURSES</Link>
            <p className='text-gray-700'>Ungraduate Courses</p>
            <p className='text-gray-700'>Graduate Courses</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-10'>
          <IconContacts />
          <div>
            <Link to='/contacts' className='text-xl font-medium text-gray-800 hover:text-blue-600'>CONTACTS</Link>
            <p className='text-gray-700'>You can contact me through email or phone.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage;