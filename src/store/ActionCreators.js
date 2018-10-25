
import actionTypes from './actionTypes';

export const getInputChangeAction = value => ({
    type: actionTypes.CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoItemAction = () => ({
    type: actionTypes.ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: actionTypes.DELETE_TODO_ITEM,
    index
})