import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'

const Usercard = ({ data }) => {

   const navigate = useNavigate()
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.map((item) => (
          <div
            key={item.id}
            className="max-w-sm w-full sm:w-70 md:w-76 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-3xl p-8 shadow-xl flex flex-col items-center space-y-8 min-h-[300px]"
          >
            <div className="text-center mb-4">
              <h2 className="text-white text-3xl font-bold tracking-tight">
                {item.name.firstname} {item.name.lastname}
              </h2>
              <p className="text-gray-400 italic mt-1 text-lg">@{item.username}</p>
            </div>

            <div className="text-center text-gray-300 space-y-2 text-sm sm:text-base mb-6">
              <p>{item.address.street}, {item.address.city}</p>
              <p>{item.phone}</p>
            </div>

            <button onClick={()=>navigate(`userr/${item.id}`)} className="w-full bg-white text-gray-900 font-semibold py-3 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200">
              View More
            </button>
          </div>


        ))}
      </div>
    </div>
  )
}



export default React.memo(Usercard)