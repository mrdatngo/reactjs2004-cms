import apis from '../apis';
import { LOGGIN } from '../constants/ActionsType'

export const login = (data) => (dispatch) => {
    return apis.login(data).then(res => {
        if (res.data.token != "") {
            dispatch({ type: LOGGIN })
            localStorage.setItem("token", res.data.token)
        }
        return res
    })
}