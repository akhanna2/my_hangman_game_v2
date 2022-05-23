import React from 'react'
import zero from './img/zero.jpg';
import one from './img/zero.jpg';
import two from './img/zero.jpg';
import three from './img/zero.jpg';
import four from './img/zero.jpg';
import five from './img/zero.jpg';
import six from './img/zero.jpg';
import seven from './img/zero.jpg';
import eight from './img/zero.jpg';
import nine from './img/zero.jpg';
import ten from './img/zero.jpg';

const ImageLives = [zero, one, two, three, four, five, six, seven, eight, nine, ten]

const Images = ({lives}) => {
   return (
     <div>
        <img alt='lives remaining' src={ImageLives[lives]} />
    </div>   
   )
}
    

export default Images