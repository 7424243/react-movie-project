import {CRITICS_FETCH_SUCCESS} from './critics.actions'

const initialState = {
    critics: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CRITICS_FETCH_SUCCESS:
            return {
                ...state,
                critics: action.payload
            }
        default: 
            return state
    }
}