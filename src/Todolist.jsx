import React from 'react';
import "antd/dist/antd.css";
import "./index.css";
import { Input, Button, List } from 'antd';
import store from './store/index.js';
import {getInputChangeAction, getAddTodoItemAction, getDeleteItemAction, getTodoList} from "./store/ActionCreators.js";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleStorChange = this.handleStorChange.bind(this);
    store.subscribe(this.handleStorChange);
  }
  
  render() {
    return (
      <div  style={{"width": "300px"}}>
        <Input
          placeholder="Basic usage"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <Button type="primary" onClick={this.handleItemAdd.bind(this)}>提交</Button>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  handleChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action);
  }

  handleItemAdd(index) {
    const action = getAddTodoItemAction()
    store.dispatch(action);
  }
  handleStorChange () {
    this.setState(store.getState());
  }
}

export default Todolist;
