import './DedicatedBlogs.css'
import Banner from '../../Components/Banner/Banner';
import blogs from '../../Utils/MockData';
import { useState } from 'react';

function DedicatedBlogs(){
    const [BlogId,setBlogId]=useState(1);

    let display= blogs.filter(blog=>BlogId == blog.id)[0]
    console.log(display);
    return(
        <>
        <Banner value="DedicatedBlogs"/>
        <h1>{display.title}</h1>
        <h5>{display.category}</h5>
        <p>{display.content}</p>

        </>
    )
}

export default DedicatedBlogs;