import React from 'react'
import {Card} from 'react-bootstrap'

import './MovieCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieCard = ({movies}) => {
  return (
    <div className='Card'>
      <Card style={{ width: '20rem'}} >
  <Card.Img variant="top" src={movies.PosterUrl} style={{width:"320px"}} />
 
  <Card.Body > 
  
    <Card.Title>{movies.title}</Card.Title>
    <Card.Text>
     {movies.description}
    </Card.Text>
    
   
<span>{movies.rating}</span>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard
