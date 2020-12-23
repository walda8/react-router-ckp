import React from 'react';
import MooviCard from './moovicard';

export default function MovieList({movies,filtredrate,filtredname}){

    return (
        <div className='ListM'>
            {movies.filter((el)=>el.name.toLowerCase().includes(filtredname.toLowerCase().trim()) && el.rate >= filtredrate).map((el,index)=>{return <MooviCard el={el} key={index} /> })}
        </div>
    )

}