import React, { useState } from 'react'
import Ecards from './Ecards'
import { updateMessageService } from '../services/'

const MessageModal = (props) => {

    const [message, setMessage] = useState('')
    const [person, setPerson] = useState('')
    const [msgInfo, setMsgInfo] = useState(false)
    const [ecards, setEcards] = useState(false)

    const setDefaultState = () => {
        setMessage('')
        setPerson('')
    }

    const updateMessage = async () => {
        const body = {
            "message": message,
            "name": person
        }
        const { data } = await updateMessageService(body)
        if (data.status) {
            setMsgInfo(true)
            setDefaultState()
        }
    }

    const handleSave = () => {
        updateMessage()
    }

    return (
        ecards ?
            <Ecards />
            :
            <>
                <h1 className="home-heading mt-3">Submit your wish here</h1>
                <div className="card p-3 m-3 custom-card">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Guruvijay Pradhan" value={person} onChange={(e) => setPerson(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Every GOODBYE is not an end. It's a new beginning also." rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleSave} disabled={!(message && person)}>Save</button>
                </div>
                {
                    msgInfo ?
                        <div className="thankyou">
                            <h3>Thank You</h3>
                            <div>Your message updated successfully</div>
                        </div>
                        :
                        null
                }

                <div className="">
                    <button type="button" className="btn btn-outline-dark first" onClick={props.closeModal}>Back to home</button>
                    <button type="button" className="btn btn-outline-dark second" onClick={() => setEcards(true)}>All messages</button>
                </div>

            </>
    )
}

export default MessageModal