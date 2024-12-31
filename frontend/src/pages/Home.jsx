import React, { useEffect, useState } from 'react';
import Blogcard from '../components/Blogcard';
import { getBlogs } from '../api/api';
import { use } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Home() {

    let [searchParams, setSearchParams] = useSearchParams();

    const [blogs,setBlogs] = useState(null);

    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogs();
            setBlogs(allBlogs.data);
        }
        fetchData();
},[]);

    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogs(searchParams.get('category'));
            setBlogs(allBlogs.data);
        }
        fetchData();
    },[searchParams]);

    const data = [
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/255/300/200',
            description:'Lorem Picsum is an ideal service for web designers.You can also view the existing images and their details.',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/230/300/200',
            description:'Lorem Picsum is an ideal service for web designers.You can also view the existing images and their details.',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/235/300/200',
            description:'Lorem Picsum is an ideal service for web designers.You can also view the existing images and their details.',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/227/300/200',
            description:'Lorem Picsum is an ideal service for web designers.You can also view the existing images and their details.',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/217/300/200',
            description:'Lorem Picsum is an ideal service for web designers.You can also view the existing images and their details.',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/277/300/200',
            description:'Lorem Picsum is an ideal service for web designers.You can also view the existing images and their details.',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        
    ]

  return (
    <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {blogs && blogs.map((x,i) => {
                return <Blogcard key={i} blogdata={x}/>
            })}
            
        </div>

    </div>
  )
}
