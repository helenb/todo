import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ item, toggleDone }) => {
    return (
        <li>
            <h3>
                <input
                    type="checkbox"
                    value={item.done}
                    onChange={(e) => toggleDone(item, e)}
                    checked={item.done ? 'checked' : ''}
                    id={item.id}
                />
                <label htmlFor={item.id}>{item.text}</label>
            </h3>
            <b>Category:</b> {item.category_origin}
            <br />
            <b>Due date:</b>{' '}
            {new Date(item.due_date).toLocaleString('en-GB', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}
            <br />
            <br />
        </li>
    );
};

Todo.propTypes = {
    toggleDone: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
};

export default Todo;
