const initialState = {
    auth: false,
    message: '',
    registerMessage: '',
    logoutMessage: ''
}

export default (auth = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            auth.message = 'Invalid credientals' ;
            auth.auth = false ;
            return auth 
        case 'LOGIN_SUCCESS':
            auth.auth = true ;
            auth.message = '' ;
            return auth 
        case 'REGISTER':
            auth.registerMessage = action.payload ;
            return auth 
        case 'LOGOUT_SUCCESS':
            auth.auth = false ;
            return auth
        default:
            return auth ;
    }
}