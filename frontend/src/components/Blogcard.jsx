import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidCategory } from "react-icons/bi";

export default function Blogcard(props) {
    
        let blogdata = props.blogdata;
        const apiURL = 'http://localhost:3009/';

  return (
    <div className='bg-white shadow-md overflow-hidden rounded-xl'>
        <Link to={`/blog/${blogdata.id}`}>
        <div className='flex flex-col w-full'>
            {/* <img src={apiURL+blogdata.image} alt="" /> */}
            {/*<div className="w-full h-[250px]" style={{background:`url(${apiURL+blogdata.image})` ,backgroundRepeat:'no-repeat' ,backgroundSize:'cover' ,backgroundPosition:'center' }} >
            </div>*/}
            
            <img src={apiURL + blogdata.image} alt="Blog Image" style={{ width: '100%', height: '250px' ,backgroundRepeat:'no-repeat' ,backgroundSize:'cover' ,backgroundPosition:'center', }} />

            <div className='p-2'>
                <h5 className='mt-1 text-left'> {blogdata.title} </h5>
                <p className='flex justify-start items-center opacity-70'> 
                  <BiSolidCategory />
                  <span className='text-sm text-left ml-2'>{blogdata.category} </span>
                </p>
            </div>
        </div>
        </Link>
    </div>
  )
}
