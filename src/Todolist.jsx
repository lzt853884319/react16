import React from "react";
import {connect} from "react-redux";
import {changeInputValue, addListItem, deleteItem} from "./store/ActionCreate";

const TodoList = (props) => {
    return (
        <div>
            <div>
                <input type="text" value={props.inputValue} onChange={props.handleChange} />
                <button onClick={props.handleClick}>提交</button>
            </div>
            <ul>
                {props.list.map((item, index) => {
                    return <li key={index} onClick={props.deleteItem.bind(null, index)}>{item}</li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange(e) {
            const action = changeInputValue(e.target.value);
            dispatch(action);
        },
        handleClick() {
            const action = addListItem();
            dispatch(action);
        },
        deleteItem(index) {
            const action = deleteItem(index);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);