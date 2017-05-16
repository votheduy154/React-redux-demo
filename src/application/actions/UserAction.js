import * as actionTypes from '../configs/actions';
import _ from 'lodash';

function _getLoginAccount(response) {
    return {
        type: actionTypes.GET_ACCOUNT_DEPOSIT_INFO,
        payload: response,
    }
}

export function getLoginAccount() {
    return {
        type: "USER_ACTION",
        payload: {username: "NEW ABC"},
    }
}