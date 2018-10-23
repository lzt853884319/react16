import React from 'react';
import "antd/dist/antd.css";
import "./index.css";
import { Input, Button, List } from 'antd';
import store from './store/index.js';

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
  }
  
  render() {
    return (
      <div  style={{"width": "300px"}}>
        <Input
          placeholder="Basic usage"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <Button type="primary">提交</Button>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }

  handleChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    }
    store.dispatch(action);
  }
}

export default Todolist;
