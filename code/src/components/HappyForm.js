import React from 'react';
import Heart from './Heart';

const HappyForm = ({ onFormSubmit, newThought, onNewThoughtChange }) => {

    const isSubmitButtonDisabled = newThought.length < 6 || newThought.length > 140

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <label htmlFor="textruta">What's making you happy right now?</label>
            <textarea
                id="textruta" 
                value={newThought} 
                onChange={onNewThoughtChange} 
                rows="4" 
                cols="30" 
                placeholder="Type your happy thought here" />
            <p>{newThought.length}/140 (max 140 ord)</p>
            <button
                className='send-thought-button'
                type="submit"
                disabled={isSubmitButtonDisabled}>
                <Heart/>Send Happy Thought<Heart/>
            </button>
            {isSubmitButtonDisabled && <p>Min 6 letters</p>}
        </form>
    )
}

export default HappyForm;
