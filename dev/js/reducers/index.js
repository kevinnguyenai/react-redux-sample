import {combineReducers} from 'redux';
import UserReducers from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
    users: UserReducers,
    activeUser: ActiveUserReducer
})

export default allReducers;