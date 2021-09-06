import React, { useState } from 'react'
import MessageModal from './MessageModal'
import Adios from '../assets/images/adios.jpg'
import GoodLuck from '../assets/images/goodluck.jpg'


const Home = () => {

    const [msgModal, setMsgModal] = useState(false)
    return (
        msgModal ?
            <MessageModal
                closeModal={() => setMsgModal(false)}
            />
            :
            <>
                <img src={Adios} />
                <img src={GoodLuck} />
                <h1 className="home-heading">Please <span className="as-link" onClick={() => setMsgModal(true)}>click here</span> to start</h1>
            </>
    )
}

export default Home