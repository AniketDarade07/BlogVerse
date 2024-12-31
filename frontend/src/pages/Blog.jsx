import React, {useState, useEffect} from 'react';
import {getBlogbyid} from '../api/api';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import dateFormat from "dateformat";

export default function Blog() {

  const apiURL = 'http://localhost:3009/';

  let {id} = useParams();
  const [blog,setBlog] = useState(null);
  
      useEffect(() => {
          async function fetchData(){
              const allBlogs = await getBlogbyid(id);
              console.log(allBlogs);
              setBlog(allBlogs.data[0]);
          }
          fetchData();
  },[]);


  return (
    <div className='flex justify-center items-center'>
        {blog && <div className='flex flex-col w-[60%] overflow-hidden'>
            <h1 className='mt-1 text-4xl extrabold'>{blog.title}</h1>

            <div className="flex mt-4 mb-4">
                <small>{dateFormat(blog.createdon, "mmmm dS, yyyy, h:MM TT")}</small>
            </div>
            <img className='rounded-lg mb-10' src={apiURL+blog.image} alt=""></img>
            <div>
                {parse(blog.post)}
            </div>
        </div>}
    </div>
  )
}
