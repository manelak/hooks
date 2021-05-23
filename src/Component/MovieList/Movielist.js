import React from "react";
import MovieCard from '../MovieCard/MovieCard'
import '../MovieList/MovieList.css'

const Movielist = ({ movies, search}) => {
  return (
    <div className='ma'> 
      {movies.filter(el=>el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((el,i)=><MovieCard title={el.title} description={el.description} PosterUrl={el.PosterUrl} key={i}/>)}
        </div>
    )
}



  
 

export default Movielist;
