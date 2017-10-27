import * as types from '../constants/ActionTypes';

// Action для добавляения поста.


export const addPost = (payload) => ({type: types.ADD_POST, payload});
export const del = (payload) => ({type: types.DELETE_POST, payload});
export const edit = (payload) => ({type: types.EDIT_POST, payload});
