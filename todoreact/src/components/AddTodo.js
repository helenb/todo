import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const AddTodo = ({
    addTodo,
    newTodoValue,
    setNewTodoValue,
    categories,
    showConfirmTodoText,
}) => {
    const categoriesOptions = categories.map((category) => {
        return (
            <option key={category.id} value={category.id}>
                {category.text}
            </option>
        );
    });

    // handles the change in multiple fields at once
    const handleChange = (e) => {
        const value = e.target.value;
        setNewTodoValue({
            ...newTodoValue,
            [e.target.name]: value,
        });
    };

    // check there are categories before rendering
    if (categories.length === 0) {
        return (
            <>
                <h2>Add a new todo item</h2>
                <p>
                    You need to{' '}
                    <Link to={`../categories/`}>add a category</Link> before you
                    can add a new todo item.
                </p>
            </>
        );
    }

    // check there is a category in the newToDoValue before rendering
    if (newTodoValue.category === null) {
        newTodoValue.category = categories[0].id;
    }

    return (
        <>
            <h2>Add a new todo item</h2>
            {newTodoValue.dueDate}
            <form onSubmit={addTodo}>
                <label htmlFor="new-todo-text">Text</label>{' '}
                <input
                    name="text"
                    type="text"
                    id="new-todo-text"
                    value={newTodoValue.text}
                    onChange={handleChange}
                />{' '}
                <label htmlFor="choose-category">Category</label>{' '}
                <select
                    name="category"
                    id="choose-category"
                    value={newTodoValue.category}
                    onChange={handleChange}
                >
                    {categoriesOptions}
                </select>{' '}
                <input
                    type="date"
                    name="dueDate"
                    value={newTodoValue.dueDate}
                    onChange={handleChange}
                />
                <input type="submit" value="Add" />
            </form>
            {/* Use this syntax instead of && - see https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx */}
            {showConfirmTodoText ? (
                <p>Added a new todo: {newTodoValue.text}</p>
            ) : null}
        </>
    );
};

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    newTodoValue: PropTypes.object,
    setNewTodoValue: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    showConfirmTodoText: PropTypes.bool.isRequired,
};

export default AddTodo;
