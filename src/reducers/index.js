import { combineReducers } from 'redux';
import { choosefoods } from './choosefoods';
import { comments } from './comments';
import { sidenav } from './sidenav';
import { footer } from './footer';
const RootReducer =combineReducers({
    choosefoods,
    comments,
    sidenav,
    footer
})
export default RootReducer