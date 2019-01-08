import { GET_RATING} from '../constants/Rating';
export const comments = (state = [], action) => {
    switch (action.type) {
        case GET_RATING:return action.comments
        default:
            return state
    }
}