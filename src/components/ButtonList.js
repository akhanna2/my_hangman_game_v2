import React from 'react'
import Button from './Button'

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const ButtonList = () => {
    return (
        <div className='buttonlist'>
            {alphabet.map((letter) => {
                return (
                    <Button letter={letter} />
                )
            })}
        </div>
    )
}

export default ButtonList