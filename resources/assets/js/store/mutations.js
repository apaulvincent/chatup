export const fetchUser = (state, data) => {
    state.user = data
}

export const fetchMessages = (state, data) => {
    state.messages = data
}

export const broadcastMessages = (state, data) => {
    state.messages.push({
        message: data.message.message,
        user: data.user
    })
}



export const addMessage = (state, data) => {
    state.messages.push({
        message: data.message,
        user: data.user
    })
}