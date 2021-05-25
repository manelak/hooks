import React from "react";
import MovieCard from '../MovieCard/MovieCard'
import '../MovieList/MovieList.css'

const Movielist = ({ movies}) => {
  return (
    <div className='ma'> 
{      
    movies.map((el,i)=><MovieCard key={i} movies={el}/>)
}        </div>
    )
}



  
 

export default Movielist;
