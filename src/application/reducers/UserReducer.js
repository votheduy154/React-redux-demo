import * as actionTypes from '../configs/actions';
const INITIAL_STATE = [];

module.exports = function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.GET_LOGIN:
            return {...state, username: "ABC"}
        default:
            return {...state, position: "USER_REDUCER"};
    }
}