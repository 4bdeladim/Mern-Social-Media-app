import * as api from '../api'

export const comment = (userID, postID, comment) => async (dispatch) => {
    try {
        const { data } = await api.commentOnApost(userID, postID, comment);
        dispatch({ type: 'COMMENT_SUCCESS', payload: data})
    } catch (error) {
        dispatch({ type: 'COMMENT_ERROR', payload: 'Somthing went wrong'})
    }
}
