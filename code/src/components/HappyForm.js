import React from 'react'
import Emoji from './Emoji'

const HappyForm = ({ onFormSubmit, newThought, onNewThoughtChange }) => {

    const isSubmitButtonDisabled = newThought.length < 6 || newThought.length > 140

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <label htmlFor="thought-input">What's making you happy right now?</label>
            <textarea
                className="thought-input"
                id="thought-input"
                value={newThought}
                onChange={onNewThoughtChange}
                rows="4"
                cols="30"
                placeholder="Type your happy thought here (6 to 140 characters)" />
            <div class="thought-length">
                <span>{newThought.length}/140 </span>
                {newThought.length > 140 && <span>Your thought is too long!</span>}
            </div>
            <button
                className='send-thought-button'
                type="submit"
                disabled={isSubmitButtonDisabled}>
                <Emoji symbol="❤️" label="heart" />
                <span className='button-text'>Send Happy Thought</span>
                <Emoji symbol="❤️" label="heart" />
            </button>
        </form>
    )
}

export default HappyForm
