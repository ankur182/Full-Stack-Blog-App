import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = ({data}) => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={()=>{navigate(`/blog/${data._id}`)}} className="blog">
        <img className='w-full h-[60%] rounded-lg mb-2' src={`http://localhost:3000/uploads/${data.image}`} alt="" />
        <h3>{data.title}</h3>
        <p className='text-[gray] text-[14px] w-[90%] line-clamp-3'>{data.desc}</p>
      </div>
    </>
  )
}

export default Blog