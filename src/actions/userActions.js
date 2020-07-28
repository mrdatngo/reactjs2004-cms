import apis from '../apis';
import { LOGGIN } from '../constants/ActionsType'

export const login = (data) => (dispatch) => {
    return apis.login(data).then(res => {
        if (res.data.success && res.data.token != "") {
            dispatch({ type: LOGGIN })
        }
        return res.data
    })
}