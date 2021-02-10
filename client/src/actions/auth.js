import * as api from '../api'

export const loginToAccount = (username, password) => async (dispatch) => {
    try {
        const { data } = await api.login(username, password);
        //THIS SECOND LINE WILL WAIT UNTIL THE DATA COME,
        dispatch({ type: 'LOGIN_SUCCESS', payload: true })
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', payload: false})
    }
}

export const register = (name, username, password) => async (dispatch) => {
    try {
        const { data } = await api.register(name, username, password);
        dispatch({type: 'REGISTER', payload: data.message })
    } catch (error) { 
        dispatch({type: 'REGISTER', payload: 'Somthing went wrong' })
    }
}

export const logout = () => async (dispatch) => {
    try {
        const { data } = await api.logout() ;
        dispatch({type: 'LOGOUT_SUCCESS', payload: data.message })
    } catch (error) {
        console.log(error)
    }
}