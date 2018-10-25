
import actionTypes from "./actionTypes";
const defaultState = {
    inputValue: '2333',
    list: ["111","222"]
};

export default (state=defaultState, action) => {
    console.log(state, action);
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
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
        default:
            break;
    }
    return newState;
}