import React from 'react';
import Card from './Card';
import './cards.css';
import {useState} from 'react';
const Cards=(props)=>{
    let courses=props.courses;
    let category=props.category;
    const [likedCourses, setLikedCourses]=useState([]);
    console.log(courses);
    function getCourses(){ /* //to get a array which contain all 5 objects data */
    if(category==="All"){  
        //passing all catogories
    let allCourses=[];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    else{//passing specific caegories
        return courses[category];
    }
}

    return (
        <div className="cards">
        
       {
       getCourses().map((course) => (
        <Card key={courses.id} course={course} setLikedCourses={setLikedCourses} likedCourses={likedCourses}/>
       ))
       }
    </div>
    )
    }
    export default Cards;