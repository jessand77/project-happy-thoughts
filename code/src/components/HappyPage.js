import React, { useState, useEffect } from 'react';

import HappyForm from './HappyForm';
import HappyList from './HappyList';

const HappyPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [thoughtList, setThoughtList] = useState([]);
    const [newThought, setNewThought] = useState('');

    const HAPPY_THOUGHTS_API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts/';

    const fetchThoughts = () => {
        setIsLoading(true);
        fetch(HAPPY_THOUGHTS_API)
          .then((response) => response.json())
          .then((data) => setThoughtList(data))
          .catch((error) => console.error(error))
          .finally(() => setIsLoading(false))
    };

    useEffect(() => {
        fetchThoughts()
    }, []);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newThought })
    }

    const postNewThought = () => {
        fetch(HAPPY_THOUGHTS_API, options)
            .then((response) => response.json())
            .then(() => fetchThoughts())
            .finally(() => setNewThought(''));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postNewThought();
    }

    const handleNewThoughtChange = (event) => setNewThought(event.target.value);

    return (
        <div>
            <HappyForm 
              onFormSubmit={handleSubmit}
              newThought={newThought}
              onNewThoughtChange={handleNewThoughtChange}
               />
            <HappyList isLoading={isLoading} thoughtList={thoughtList}/>
        </div>
    )
}

export default HappyPage;