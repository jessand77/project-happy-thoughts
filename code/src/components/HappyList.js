import React from 'react'
import HappyListItem from './HappyListItem'

const HappyList = ({ isLoading, thoughtList, onHeartClick }) => {
    if (isLoading) {
        return <h1>Loading in progress...</h1>
    }

    return (
        <section className='happy-list'>
            {thoughtList.map((thought) => (
                <HappyListItem
                    key={thought._id}
                    thoughtId={thought._id}
                    message={thought.message}
                    likes={thought.hearts}
                    creationDate={thought.createdAt}
                    onHeartClick={onHeartClick}
                />
            ))}
        </section>

    )
}

export default HappyList