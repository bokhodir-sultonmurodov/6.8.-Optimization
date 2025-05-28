import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import { useParams } from 'react-router-dom'

const UseDetail = () => {
   const {id} =  useParams()
    const [data, setData] = useState(null)

  useEffect(()=>{
    api
        .get(`users/${id}`)
        .then(res=>{
            setData(res.data)
        })
        
    },[])
    console.log(data);
  return (
    <div>UseDetail</div>
  )
}

export default React.memo(UseDetail)