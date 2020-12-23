import React from 'react'
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap'
import '../App.css';
import ReactStars from "react-rating-stars-component";


export default function MooviCard({el}){

  
    

    return (
        <>
<Card >
  
  <Card.Body>
    <Link  to={`/description/${el.id}`}>
    <Card.Text>{el.image} </Card.Text>
    
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>{el.type} </Card.Text>
    <ReactStars value={el.rate}/>
    </Link>
  </Card.Body>
</Card>
        </>
    )

}


