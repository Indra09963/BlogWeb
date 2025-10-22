import React from "react";
import './HomeStyle.css'
import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlogs/TrendingBlog";
import blogs from "../../Utils/MockData";
function Home(){
    return(
       
           <>
            <Banner value="home"/>
            <div className="outer">
            <h2>Read from Blogs</h2>
            <div className="d-flex justify-content-between" >
                <div className="card" style={{width: "18rem"}}>
                    <img src="/media/programming.jpg" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Programming</h5>
                    </div>
                    </div>
                     <div className="card" style={{width: "18rem"}}>
                    <img src="/media/cooking.jpg" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Cooking</h5>
                    </div>
                    </div>
                     <div className="card" style={{width: "18rem"}}>
                    <img src="/media/Fitness.jpg" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Fitness</h5>
                    </div>
                    </div>
            </div>
            </div>

          <div className="trending-blogs-section">
                <h1>
                    Trending Blogs
                </h1>
                <div className="d-flex flex-wrap justify-content-between row-gap-3 ">
                    {
                        blogs.map(blog =>
                            < TrendingBlog key={blog.id} blog={blog} />
                        )
                    }
                </div>
            </div>
        
            
           </>
    )
}

export default Home;