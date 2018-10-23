const defaultState = {
    inputValue: '2333',
    list: ["111","222"]
};

export default (state=defaultState, action) => {
    console.log(state, action);
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "change_input_value":
            newState.inputValue = action.value;
            break;
        default:
            break;
    }
    return state;
}