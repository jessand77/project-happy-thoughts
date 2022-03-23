import React from 'react';
import Heart from './Heart'

const HappyForm = ( {onFormSubmit, newThought, onNewThoughtChange} ) => {

    const happyThoughtLength = newThought.length;

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <label htmlFor="textruta">What's making you happy right now?</label>
            <textarea id="textruta" value={newThought} onChange={onNewThoughtChange} rows="4" cols="30" /> 
            <p>{happyThoughtLength}/140</p>
            <button type="submit"><Heart />Send Happy Thought<Heart /></button>
        </form>
    )
}

export default HappyForm;
