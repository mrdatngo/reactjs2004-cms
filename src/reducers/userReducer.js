import { LOGGIN } from '../constants/ActionsType'
 
const initialStateUser = {
    isLoggedIn: false,
    name: ""
}

function userReducer(state=initialStateUser, action) {
    switch(action.type) {
        case LOGGIN:
            return {
                ...state,
                isLoggedIn: true
            }
        default:
            return state
    }
}

export default userReducer;