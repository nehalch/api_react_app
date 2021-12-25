import React, { useState } from "react";
import PropTypes from "prop-types";

const styles = {
	input: {
		marginRight: "1rem",
		border: "none",
		marginLeft: "2.8rem",
		background: "rgb(36, 33, 36)",
		color: "rgb(191, 225, 232)",
	},
	add: {
		background: "rgb(214,151,3)",
		borderRadius: "4px",
		color: "#000",
		border: "none",
	},
};

function useInputValue(defaultValue = "") {
	const [value, setValue] = useState(defaultValue);
	return {
		bind: {
			value,
			onChange: (event) => setValue(event.target.value),
		},
		clear: () => setValue(""),
		value: () => value,
	};
}

function AddTodo({ onCreate }) {
	const input = useInputValue();
	function submitHandler(event) {
		event.preventDefault();
		if (input.value().trim()) {
			onCreate(input.value());
			input.clear();
		}
	}

	return (
		<form className="form" onSubmit={submitHandler}>
			<input
				{...input.bind}
				placeholder="Type new todo..."
				style={styles.input}
			/>
			<button type="submit" style={styles.add}>
				+
			</button>
		</form>
	);
}

AddTodo.propTypes = {
	onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
