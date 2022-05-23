import React from 'react'

const Button = ({letter}) => {
    return (
        <div>
            <button className='button' id={letter}>{letter}</button>
        </div>
    )
}

export default Button