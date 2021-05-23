import React from 'react'
import {Card,Button} from 'react-bootstrap'
import './MovieCard.css'
import StarRating from '../Movie/StarRating'
const MovieCard = ({title,description,PosterUrl,rating}) => {
  return (
    <div className='Card'>
      <Card style={{ width: '20rem'}} >
  <Card.Img variant="top" src={PosterUrl} style={{width:"320px"}} />
 
  <Card.Body >
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
     <span >{rating}</span>

  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard
