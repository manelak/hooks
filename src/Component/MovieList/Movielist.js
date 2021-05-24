import React from "react";
import MovieCard from '../MovieCard/MovieCard'
import '../MovieList/MovieList.css'

const Movielist = ({ movies, search,rating,tabStar}) => {
  return (
    <div className='ma'> 
      {movies.filter(el=>el.rating>=tabStar.filter(el=>el.isColored).length).filter(el=>el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((el,i)=><MovieCard title={el.title} description={el.description} PosterUrl={el.PosterUrl} rating={rating}key={i}/>)}
        </div>
    )
}



  
 

export default Movielist;
