import React, { useState, useEffect } from 'react'

import HappyForm from './HappyForm'
import HappyList from './HappyList'

const HappyPage = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [thoughtList, setThoughtList] = useState([])
    const [newThought, setNewThought] = useState('')

    const HAPPY_THOUGHTS_API = 'https://jessicas-happy-thoughts-api.herokuapp.com/thoughts'
    // const TECHNIGOS_HAPPY_THOUGHTS_API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts/'

    const getHappyThougths = () => {
        setIsLoading(true)
        fetch(HAPPY_THOUGHTS_API)
            .then((response) => response.json())
            .then((data) => setThoughtList(data))
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        getHappyThougths()
    }, [])


    const postNewThought = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: newThought })
        }

        fetch(HAPPY_THOUGHTS_API, options)
            .then((response) => response.json())
            .then((newThought) => {
                setThoughtList((prevList) => [newThought, ...prevList])
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postNewThought()
        setNewThought('')
    }

    const handleNewThoughtChange = (event) => setNewThought(event.target.value)

    const handleHeartClick = (thoughtId) => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }

        fetch(`${HAPPY_THOUGHTS_API}${thoughtId}/like`, options)
            .then((res) => res.json())
            .then(() => getHappyThougths())
    }

    return (
        <main className="happy-page">
            <h1>Happy Thoughts!</h1>
            <HappyForm
                onFormSubmit={handleSubmit}
                newThought={newThought}
                onNewThoughtChange={handleNewThoughtChange}
            />
            <HappyList
                isLoading={isLoading}
                thoughtList={thoughtList}
                onHeartClick={handleHeartClick} />
        </main>
    )
}

export default HappyPage