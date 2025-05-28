import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'

const ProductDetail = () => {
  const {id} =  useParams()
    const [data, setData] = useState(null)

  useEffect(()=>{
    api
        .get(`products/${id}`)
        .then(res=>{
            setData(res.data)
        })
        
    },[])
    console.log(data);
    
  return (
   <div className="container mx-auto p-6">
  <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-2xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <img
        src={data?.image}
        alt={data?.title}
        className="w-full h-80 object-contain bg-white rounded-xl p-4 "
      />
    </div>
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold mb-4">{data?.title}</h2>
      <p className="text-sm text-gray-300 mb-2">Category: {data?.category}</p>
      <p className="text-base text-gray-200 mb-4">{data?.description}</p>

      <div className="mb-4">
        <p className="text-yellow-400 font-semibold text-lg">Rating: {data?.rating?.rate} ★</p>
        <p className="text-sm text-gray-300">In Stock: {data?.rating?.count}</p>
      </div>

      <strong className="text-2xl font-bold text-white mb-6">${data?.price}</strong>

      <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition w-fit">
        Buy now
      </button>
    </div>
  </div>
</div>

  )
}

export default React.memo(ProductDetail)