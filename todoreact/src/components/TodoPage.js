import React, { useEffect, useState } from 'react';

import { postTodo, putToggleDone, getTodos } from '../apis/todo';
import { getCategories } from '../apis/categories';
import Todo from './Todo';
import AddTodo from './AddTodo';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showConfirmTodoText, setShowConfirmTodoText] = useState(false);
    // move this to AddTodo
    // add onSubmit function there
    const [newTodoValue, setNewTodoValue] = useState({
        text: '',
        dueDate: new Date().toLocaleDateString('en-CA'),
        category: null,
    });
    const [toDoAdded, setToDoAdded] = useState(false);

    useEffect(() => {
        updateTodos();
        updateCategories();
    }, []);

    useEffect(() => {
        setShowConfirmTodoText(true);
        setTimeout(() => {
            setShowConfirmTodoText(false);
            setToDoAdded(false);
        }, 3000);
    }, [toDoAdded]);

    const updateTodos = async () => {
        const response = await getTodos();
        setTodos(response.data);
    };

    const updateCategories = async () => {
        const response = await getCategories();
        setCategories(response.data);
    };

    const addToDoCallback = () => {
        updateTodos();
        setToDoAdded(true);
    };

    const addTodo = async (e) => {
        e.preventDefault();
        postTodo(newTodoValue, addToDoCallback);
    };

    const toggleDoneCallback = () => {
        updateTodos();
    };

    const toggleDone = async (item, e) => {
        e.preventDefault();
        putToggleDone(item, toggleDoneCallback);
    };

    const toDosMarkup = todos.map((item) => {
        return (
            <Todo
                key={item.id}
                item={item}
                toggleDone={toggleDone}
                addTodo={addTodo}
            />
        );
    });

    return (
        <div>
            <h2>To-dos</h2>
            <AddTodo
                addTodo={addTodo}
                newTodoValue={newTodoValue}
                setNewTodoValue={setNewTodoValue}
                categories={categories}
                showConfirmTodoText={showConfirmTodoText}
            />
            <form>
                <ul>{toDosMarkup}</ul>
            </form>
        </div>
    );
};

export default TodoPage;
