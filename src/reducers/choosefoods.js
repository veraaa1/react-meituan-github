import { GET_FOODS,CUT_FOOD,ADD_FOOD } from '../constants/choosefood';
export const choosefoods = (state =[] , action) => {
    switch (action.type) {
       case GET_FOODS:return action.allfoods
        default:
            return state
    }
}