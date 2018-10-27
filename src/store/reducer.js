import actionTypes from "./actionType";
const defaultSate = {
    inputValue: "",
    list: ["aaa", "bbb", "ccc"]
}
const reducer = (state = defaultSate, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case actionTypes.INPUT_VALUE_CHANGE:
            newState.inputValue = action.value;
            break;
        case actionTypes.ADD_LIST_ITEM:
            newState.list.push(newState.inputValue);
            newState.inputValue = "";
            break;
        case actionTypes.DELET_ITEM:
            newState.list.splice(action.index, 1);
            break;
        default:
            return newState;
    }
    return newState;
}
export default reducer;