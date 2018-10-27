
import actionTypes from './actionTypes';
import axios from "axios";

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

export const initListAction = (data) => ({
    type: actionTypes.INIT_LIST_ACTION,
    data
})

export const getTodoList = ()=> {
    return (dispatch) => {

        axios.get('/list').then((res) => {
            const data = res.data;
            console.log(data);
            
            const action = initListAction(data);
            dispatch(action);
        }).catch(() => {
            // throw new Error("def")
            console.log(2)
        })
        }
}   