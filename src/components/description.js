import React from 'react';
import { useParams , Link} from "react-router-dom";


const Description=({movies})=>{
    const {movieId}= useParams()
    const des=movies.find(movie=>movie.id===Number(movieId))
    return(
        <div>
             <Link to='/'> <h3>Go back to home page</h3></Link>
            <div>
            {des.image}
            </div>
           <h5>
            {des.description}
           </h5>

        </div>
    )
}
export default Description
