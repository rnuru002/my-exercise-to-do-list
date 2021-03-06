import React, { Component } from "react";
import "./styles/index.css";

class TodoItems extends Component {
	createTasks(item) {
		return (
			<li onClick={() => this.delete(item.key)} key={item.key}>
				{item.text}
			</li>
		);
	}

	constructor(props) {
		super(props);

		this.createTasks = this.createTasks.bind(this);
	}

	delete(key) {
		this.props.delete(key);
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return <ul className="theList">{listItems}</ul>;
	}
}

export default TodoItems;
