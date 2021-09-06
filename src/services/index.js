import API from './api'
import { message } from './endpoint'

const {read, write} = message

export const getAllMessagesService = async () => {
    return await API.get(read)
}

export const updateMessageService = async (body) => {
    return await API.post(write, body)
}