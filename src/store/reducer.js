
import actionTypes from "./actionTypes";
const defaultState = {
    inputValue: '2333',
    list: []
};

export default (state=defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if(!action.type) throw new Error("invalid action type!");
    switch(action.type){
        case actionTypes.INIT_LIST_ACTION:
            
            newState.list = action.data;
            break;
        case actionTypes.CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            break;
        case actionTypes.ADD_TODO_ITEM:
            newState.list.push(newState.inputValue);
            newState.inputValue = "";
            break;
        case actionTypes.DELETE_TODO_ITEM:
            newState.list.splice(action.index, 1);
            break;
        case actionTypes.GET_INIT_LIST:
            console.log("dddd");
            
            break;
        default:
            break;
    }
    return newState;
}