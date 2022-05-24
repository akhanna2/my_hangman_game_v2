import React from 'react'

const WordLetters = ({word, correctLetters}) => {
    return(
            <div>
                {word.toUpperCase().split("").map((letter, i) => {
                    return (
                        <span key={i}>
                            {correctLetters.includes(letter) ? ` ${letter} ` : ' _ '}
                        </span>
                    )
                })}
            </div>
    )
}

export default WordLetters