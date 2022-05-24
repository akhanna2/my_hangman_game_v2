import React from 'react'
import step0 from './img/0.jpg'
import step1 from './img/1.jpg'
import step2 from './img/2.jpg'
import step3 from './img/3.jpg'
import step4 from './img/4.jpg'
import step5 from './img/5.jpg'
import step6 from './img/6.jpg'
import step7 from './img/7.jpg'
import step8 from './img/8.jpg'
import step9 from './img/9.jpg'
import step10 from './img/10.jpg'

const ImageLives = [step0, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10]

const Images = ({lives}) => {
   return (
     <div>
        <img alt='lives remaining' src={ImageLives[lives]} />
    </div>   
   )
}
    

export default Images