import React from "react";

function TrendingBlog({blog}){
    let image="";
    switch(blog.category){
        case "Programming":
            image="programming.jpg"
            break;

        case "Cooking":
            image="cooking.jpg"
            break;

        case "Travelling":
            image="travelling-home.jpg"
            break;

        case "Workouts":
            image="workout.jpg"
            break;

        case "Health":
            image="Health.jpg"
            break;
        
        default :
            image="Banner.jpg"
            break;
    }
    

    return(
       
        <>
        <div className="">
       <div className="card" style={{width: "18rem" , height:"100%"}}>
            <img src={`/media/${image}`} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p style={{fontWeight:"bold"}}>{blog.category}</p>
                <p className="card-text">{blog. previewDescription}</p>
             
            </div>
            </div>
        </div> 
        </>
    )
}
export default TrendingBlog;