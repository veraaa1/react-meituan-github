import { GET_NAV,CHANGE_NAV } from '../constants/sidenav';
export const sidenav = (state = [], action) => {
    switch (action.type) {
        case GET_NAV:return action.nav
        default:
            return state
    }
}