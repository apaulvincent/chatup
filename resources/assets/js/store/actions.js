export const fetchUser = ({commit}) => {
    axios.get('/user').then(response => {
        commit('fetchUser', response.data)
    })
}

export const fetchMessages = ({commit}) => {
    axios.get('/messages').then(response => {        
        commit('fetchMessages', response.data)
    })
}

export const postMessage = ({commit}, payload) => {

    axios.post('/messages', payload).then(response => {        
        console.log(response.data.status)
    }).catch( error => {
        console.log(error)
    })
}

export const addMessage = ({commit}, payload) => commit('addMessage', payload)


export const broadcastMessages = ({commit}) => {
    Echo.private('chatup')
    .listen('MessageSentEvent', (e) => {
        commit('broadcastMessages', e)
    })
}


// Ex: Destructure taking only 'commit' and 'state'
// export const decrement = ({commit, state}) =>  commit('increment')

// Ex: Async action
// export const incrementAsync = ({commit}) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             commit('increment')
//             resolve()
//         }, 1000)
//     })
// }
