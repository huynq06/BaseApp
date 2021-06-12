import { defaultCategories } from '../../constants/categories';
import {insert,update,insertAll} from '../../utils/stateHelper'
export const initialState = {
    allCategories:insertAll({}, defaultCategories)
    
   /*  inComeCategories: Categories.filter(cat => cat.type==='Income'),
    expenseCategories: Categories.filter(cat=> cat.type==='Expense') */
};
export default (state = initialState,action) => {
    return state;
}