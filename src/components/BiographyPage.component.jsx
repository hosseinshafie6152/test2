
function BiographyPage() {

  return (
    <div className='h-screen p-10 flex flex-col justify-around col-start-2 col-end-13 row-start-2 row-end-3 border-t-4 border-blue-900'>
      <div>
        <h2 className='text-[50px] font-medium text-gray-700'>Biography</h2>
      </div>
      <div>
        <h3 className='text-2xl font-medium'>Personal Information</h3>
        <ul className="p-5">
          <li className="text-gray-800 font-medium">FirstName : <span className="text-gray-600 font-normal">Ali</span></li>
          <li className="text-gray-800 font-medium">LastName : <span className="text-gray-600 font-normal">Mansouri</span></li>
          <li className="text-gray-800 font-medium">Nationality : <span className="text-gray-600 font-normal">Iranian</span></li>
          <li className="text-gray-800 font-medium">Age : <span className="text-gray-600 font-normal">52</span></li>
        </ul>
      </div>
      <div>
        <h3 className='text-2xl font-medium'>Educational Background</h3>
        <ul className="p-5">
          <li className="text-gray-600"><span className="text-gray-800 font-medium">Ph.D.</span> , Library and Information Science , University of Shahid Chamran [Ahvaz-Iran]</li>
          <li className="text-gray-600"><span className="text-gray-800 font-medium">M.A.</span> , Library and Information Science , University of Shahid Chamran [Ahvaz-Iran]</li>
          <li className="text-gray-600"><span className="text-gray-800 font-medium">B.A.</span> , Library and Information Science , University of Shahid Chamran [Ahvaz-Iran]</li>
        </ul>
      </div>
      <div>
        <h3 className='text-2xl font-medium'>Research Interests</h3>
        <ul className="p-5">
          <li className="text-gray-600">My research interests lie primarily in the area of Scientometrics, Data Science, and Science and Technology studies .</li>
        </ul>
      </div>
    </div>
  )
}

export default BiographyPage