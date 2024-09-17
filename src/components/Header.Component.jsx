import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComponent() {
    return (
        <div className='bg-sky-600 w-full p-5'>
            <Link to="https://www.ui.ac.ir/en"  >
                <img src="/202095112920logo.png" alt="logo-univercity"  />
            </Link>
        </div>
    )
}

export default HeaderComponent