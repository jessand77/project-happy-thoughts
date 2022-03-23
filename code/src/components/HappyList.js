import React from 'react';
import Heart from './Heart';

const HappyList = ({ isLoading, thoughtList }) => {
    if (isLoading) {
        return <h1>Loading in progress...</h1>
    }

    const handleClick = () => {
        alert("You clicked!")
    }

    return (
        <section>
          {thoughtList.map((thought) => (
            <div key={thought._id} className="card">
                <p>{thought.message}</p>
                <p>{thought.createdAt}</p>
                <button onClick={handleClick}><Heart /></button><span> x {thought.hearts}</span>
            </div>
          ))}
        </section>
        
    )
}

export default HappyList;