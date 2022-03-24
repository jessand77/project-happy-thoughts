import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import Heart from './Heart'

const HappyListItem = ({ thoughtId, message, hearts, creationDate, onHeartClick }) => {

    const creationDateObject = new Date(creationDate)
    const formattedCreationDate = formatDistanceToNow(creationDateObject, { addSuffix: true })

    // Two different heart backgrounds depending on if there are likes or not

    const buttonalt1 = (
        <button className="heart-button grey-background" onClick={() => onHeartClick(thoughtId)}>
            <Heart />
        </button>
    )

    const buttonalt2 = (
        <button className="heart-button pink-background" onClick={() => onHeartClick(thoughtId)}>
            <Heart />
        </button>
    )

    return (
        <div className="card">
            <p>{message}</p>
            <div className='card-bottom'>
                <div className='card-bottom-left'>
                    {hearts !== 0 ? buttonalt2 : buttonalt1}
                    <span> x {hearts}</span>
                </div>
                <div className='card-bottom-right'>
                    <p>{formattedCreationDate}</p>
                </div>
            </div>
        </div>
    )
}

export default HappyListItem

