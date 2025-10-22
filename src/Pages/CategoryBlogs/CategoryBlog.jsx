import React from "react";
import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlogs/TrendingBlog";
import blogs from "../../Utils/MockData";
import './CategoryBlog.css'
function CategoryBlog(){
    const [currentCategory,setCurrentCategory]=useState("Programming")
    const selectvalue=(e)=>{
        setCurrentCategory(e.target.value)
    }
    return(
           <>
            <Banner value="Category "/> 
          
            <select 
                    onChange={selectvalue}
                    value={currentCategory}
                    >
                <option value="Programming">Programming</option>
                <option value="Travelling">Travelling</option>
                <option value="Cooking">Cooking</option>
                <option value="Workouts">Workouts</option>
                <option value="Health">Health</option>
            </select>

          <div id="tbs" className="trending-blogs-section">
                <h1>
                  {currentCategory}
                </h1>
                <div className="d-flex flex-wrap justify-content-between row-gap-3 ">
                    {
                        blogs.map(blog => blog.category === currentCategory?
                            <TrendingBlog blog={blog} />:""
                        )
                    }
                </div>
            </div>
        
            
           </>
    )
}

export default CategoryBlog;