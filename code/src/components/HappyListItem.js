import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import Heart from './Heart'

const HappyListItem = ({ thoughtId, message, likes, creationDate, onHeartClick }) => {

    const creationDateObject = new Date(creationDate)
    const formattedCreationDate = formatDistanceToNow(creationDateObject, { addSuffix: true })

    // Two different heart backgrounds depending on if there are likes or not

    const buttonWithGreyBackground = (
        <button className="heart-button grey-background" onClick={() => onHeartClick(thoughtId)}>
            <Heart />
        </button>
    )

    const buttonWithPinkBackground = (
        <button className="heart-button pink-background" onClick={() => onHeartClick(thoughtId)}>
            <Heart />
        </button>
    )

    return (
        <article className="card">
            <p>{message}</p>
            <div className='card-bottom'>
                <div className='card-bottom-left'>
                    {likes !== 0 ? buttonWithPinkBackground : buttonWithGreyBackground}
                    <span> x {likes}</span>
                </div>
                <div className='card-bottom-right'>
                    <p>{formattedCreationDate}</p>
                </div>
            </div>
        </article>
    )
}

export default HappyListItem

