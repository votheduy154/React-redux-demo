import _ from 'lodash';
import { combineReducers } from 'redux';
var req = require.context("../application/reducers", true, /\.js$/);
var rootReducer = [];

req.keys().forEach(function (item) {
    var variableName = item.replace('./', '').replace('.js', '');
    var object = require('../application/reducers/' + variableName);

    if(_.isUndefined(object.aliasName) == false){
        rootReducer[object.aliasName] = object;
    }else{
        rootReducer[_.camelCase(variableName)] = object;
    }

});

export default combineReducers(rootReducer);