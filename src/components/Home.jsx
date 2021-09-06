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
                <img src={Adios} width="40%" />
                <img src={GoodLuck} width="50%" />
                <h1 className="home-heading"><span className="as-link" onClick={() => setMsgModal(true)}>ADD ADIOS MESSAGE FOR HIMADRI</span></h1>
            </>
    )
}

export default Home