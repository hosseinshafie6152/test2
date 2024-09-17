import React from 'react'
import IconContacts from '../icons/IconContacts'
import IconTel from '../icons/IconTel'
import IconFax from '../icons/IconFax'
import IconAddress from '../icons/IconAddress'

function ContactsPage() {
  return (
    <div className='h-screen p-10 border-t-4 border-blue-900 col-start-2 col-end-13 row-start-2 row-end-3'>
      <div>
        <h2 className='text-[50px] font-medium text-gray-700'>Contacts</h2>
      </div>
      <div className='my-10'>
        <p className='text-gray-600 '>It is my pleasure to receive your comments and suggestions. <br />
        You can contact me using the following contact information. For face to face meeting, please check my office & class hours schedule.</p>
      </div>
      <div className='flex flex-col gap-y-5'>
        <div className='flex items-center gap-x-3'>
          <IconContacts size={25}/>
          <span className='text-gray-700 font-medium'>Email :</span>
          <a className='text-gray-600' href="mailto:a.mansouri[at]edu.ui.ac.ir"> a.mansouri[at]edu.ui.ac.ir</a>
        </div>
        <div className='flex items-center gap-x-3 border-t border-blue-200'>
          <IconTel/>
          <span className='text-gray-700 font-medium'>Tel :</span>
          <span className='text-gray-600'>(+98)31-37935417</span>
        </div>
        <div className='flex items-center gap-x-3 border-t border-blue-200'>
          <IconFax/>
          <span className='text-gray-700 font-medium'>Postal code :</span>
          <span className='text-gray-600'>8174673441</span>
        </div>
        <div className='flex items-baseline gap-x-3 border-t border-blue-200'>
          <IconAddress/>
          <span className='text-gray-700 font-medium'>Addrees :</span>
          <span className='text-gray-600'>
          University of Isfahan <br /> Azadi square <br /> Isfahan, Iran
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage