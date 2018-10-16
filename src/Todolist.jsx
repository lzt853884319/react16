import React ,{ Fragment } from 'react';
import TodoItem from "./TODO/TodoItem";
import './style/index.css';

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "hello",
      list: ["xuexi", "学个毛啊"]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  render() {
    return (
      <Fragment >
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
      return this.state.list.map((item,index) => {
        return <TodoItem deleteItem={this.deleteItem} key={index} item={item} index={index} />
      })
  }

  handleInputChange (evt) {
    const inputValue = evt.target.value;
    this.setState(() => ({inputValue}))
  }

  handleSubmit() {
    if(this.state.inputValue === "" || this.state.inputValue === undefined) {
      return false;
    }
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }))
  }

  deleteItem(index) {
    const {list} = this.state;
    list.splice(index,1);
    this.setState(  {list});
  }
}

export default Todolist;
