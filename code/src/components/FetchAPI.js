import React, { useState, useEffect } from 'react';

const FetchAPI = () => {

    const [thoughts, setThoughts] = useState([]);
    const [messageInput, setMessageInput] = useState("");

    const HAPPY_THOUGHTS_API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts/';

    const postRequestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Never been happier before :-)' })
    }

    const fetchThoughts = () => {
        fetch(HAPPY_THOUGHTS_API)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setThoughts(json);
            });
    }

    const postYourThought = () => {
        fetch(HAPPY_THOUGHTS_API, postRequestOptions)
            .then((res) => res.json())
            .then((json) => {
                setThoughts((prev) => [json, ...prev]);
            });
    }

    useEffect(() => {
        fetchThoughts()
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        postYourThought();
    }
    
    const handleInputChange = (event) => setMessageInput(event.target.value);

    return (
        <div>

            <form className="form" onSubmit={handleSubmit}>
                <h3>The form</h3>
                <label htmlFor="thought">Your thought:</label>
                <input id="thought" type="text" value={messageInput} onChange={handleInputChange} />
                <p>Your wrote: {messageInput}</p>
                <input type="submit" value="Submit your thought" />
            </form>

            {thoughts.map((thought) => (
                <div key={thought._id} className="card">
                  <p>{thought.message}</p>
                  <p>{thought.createdAt}</p>
                  <button>Like this thought</button>
                </div>
            ))}

        </div>
    )
}

export default FetchAPI;