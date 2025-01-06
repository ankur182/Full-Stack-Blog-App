import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import { api_base_url } from '../helper'

const Blogs = () => {
  const [data, setData] = useState(null);
  const getBlogs = () => {
    fetch(api_base_url + "/getBlogs", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem("token")
      })
    }).then((res) => res.json()).then((data) => {
      if (data.success) {
        setData(data.blogs)
      }
      else {
        alert(data.msg)
      }
    })
  };

  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <>
      <div className="blogs px-[100px] mt-4 mb-5">
        <h3 className='text-2xl'>Latest Blogs</h3>

        <div className="blogsCon">

          {
            data ? data.map((item, index) => {
              return (
                <>
                  <Blog key={index} data={item} />
                </>
              )
            }) : "No Blogs Found !"
          }
        </div>
      </div>
    </>
  )
}

export default Blogs