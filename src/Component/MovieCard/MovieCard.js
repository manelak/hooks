import React from 'react'
import {Card} from 'react-bootstrap'
import StarRating from './StarRating'
import './MovieCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieCard = ({title,description,PosterUrl,rating}) => {
  return (
    <div className='Card'>
      <Card style={{ width: '20rem'}} >
  <Card.Img variant="top" src={PosterUrl} style={{width:"320px"}} />
 
  <Card.Body > 
  <span>{"".padStart(MovieCard.rating,"⭐")}</span>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
   

  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard
