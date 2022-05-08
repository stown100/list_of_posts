const initialState = {
    postUser: {
        type: 'body.length',
        order: 'desc'
    },
}

const filters = (state = initialState, action) => {
    if (action.type === 'SET_POST_USERS') {
        return {
            ...state,
            postUser: action.payload,
        }
    }
    return state;
}

export default filters;