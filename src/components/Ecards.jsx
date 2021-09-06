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
                <div className="ecard-page">
                    <h1 className="home-heading red"><span className="mt-5">ALL THE BEST</span></h1>

                    {
                        allCards && allCards.length ?
                            allCards.map(card => {
                                return (
                                    // <div className="card ecard" key={card.name}>
                                        /* <div className="card-body">
                                            <h6 className="card-subtitle mb-2 text-muted"><span className="red">{card.name}</span></h6>
                                            <p className="card-text">{card.message}</p>
                                        </div> */
                                        <div className="row">
                                            <div className="colL col-2 sap">
                                            {card.name}
                                            </div>
                                            <div className="colR col-10 msg">
                                            {card.message}
                                            </div>
                                        </div>
                                    // </div>
                                )
                            })
                            :
                            <div>No message found!!</div>
                    }
                    <div className="home-heading">
                        <button type="button" className="btn btn-outline-warning m-3" onClick={() => setHome(true)}>Back to home</button>
                    </div>
                </div>
            </>
    )
}

export default Ecards