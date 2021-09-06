import React, { useEffect, useState } from 'react'
import { getAllMessagesService } from '../services/'
import Home from './Home'

const Ecards = () => {

    const [allCards, setAllCards] = useState(null)
    const [home, setHome] = useState(false)

    useEffect(() => {
        getAllCards()
    }, [])

    const getAllCards = async () => {
        const { data } = await getAllMessagesService()
        console.log("DATA", data)
        if (data.status && data.data) {
            let allCards = (data.data)
            console.log("ALL CARDS", allCards)
            setAllCards(allCards)
        }
    }

    return (
        home ?
            <Home />
            :
            <>
                <h1 className="home-heading mt-3">All Wishes</h1>
                
                {
                    allCards && allCards.length ?
                        allCards.map(card => {
                            return (
                                <div className="card ecard" key={card.name}>
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">Name: {card.name}</h6>
                                        <p className="card-text">Message: {card.message}</p>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div>No message found!!</div>
                }
                <button type="button" className="btn btn-outline-dark start m-3" onClick={() => setHome(true)}>Back to home</button>
            </>
    )
}

export default Ecards