import { combineReducers } from '@ngrx/store';

import listReducer from '../list/ngrx/list-reducer';
import detailsReducer from '../details/ngrx/details-reducer';

export default combineReducers({
    list: listReducer,
    details: detailsReducer
});