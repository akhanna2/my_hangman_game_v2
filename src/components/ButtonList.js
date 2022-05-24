import React from 'react'

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const ButtonList = ({OnClick}) => {
    return (
        <div className='buttonlist'>
            {alphabet.map((letter) => {
                return (
                    <button key={letter} 
                            value={letter} 
                            onClick={OnClick}
                            className='button'>{letter}</button>
                )
            })}
        </div>
    )
}

export default ButtonList