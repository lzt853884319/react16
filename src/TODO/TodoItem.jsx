import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    render() {
        const {item} = this.props;
        return (
            <li onClick= {this.deleteItem}>
                {item}
            </li>
          )
    }

    deleteItem() {
        this.props.deleteItem(this.props.index)
    }
}

export default TodoItem;