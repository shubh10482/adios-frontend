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
                {
                    msgInfo ?
                        <>
                            <div className="thankyou">
                                <h3>Thank You</h3>
                                <div>Your message updated successfully</div>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-outline-dark first" onClick={props.closeModal}>Back to home</button>
                                <button type="button" className="btn btn-outline-dark second" onClick={() => setEcards(true)}>All messages</button>
                            </div>
                        </>
                        :
                        <>
                            <div className="card p-3 m-5 custom-card">
                                <div className="mb-3">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message*" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name*" value={person} onChange={(e) => setPerson(e.target.value)} />
                                </div>

                                <button type="button" className="btn btn-outline-secondary" onClick={handleSave} disabled={!(message && person)}>Save</button>
                            </div>
                        </>
                }
            </>
    )
}

export default MessageModal