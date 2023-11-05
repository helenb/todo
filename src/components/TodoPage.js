import React, { useEffect, useState } from 'react';

import api from '../apis/api';
import Todo from './Todo';
import AddTodo from './AddTodo';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showConfirmTodoText, setShowConfirmTodoText] = useState(false);
    const [newTodoValue, setNewTodoValue] = useState({
        text: '',
        dueDate: new Date().toLocaleDateString('en-CA'),
        category: 2,
    });
    useEffect(() => {
        getTodos();
    }, []);

    useEffect(() => {
        getCategories();
    }, []);

    const getTodos = async () => {
        const response = await api.get('/todos/');
        setTodos(response.data);
    };

    const getCategories = async () => {
        const response = await api.get('/categories/');
        setCategories(response.data);
    };

    const addTodo = async (e) => {
        e.preventDefault();
        api.post('/todos/', {
            text: newTodoValue.text,
            due_date: newTodoValue.dueDate,
            done: false,
            category: newTodoValue.category,
        }).then(
            () => {
                getTodos();
                setShowConfirmTodoText(true);
                setTimeout(() => {
                    setShowConfirmTodoText(false);
                }, 3000);
            },
            (error) => {
                console.error(error);
            },
        );
    };

    const toggleDone = async (item, e) => {
        e.preventDefault();
        api.put(`/todos/${item.id}/`, {
            done: item.done ? false : true,
            text: item.text,
            category: item.category,
        })
            .then(() => {
                getTodos();
            })
            .catch((error) => {
                console.error(error);
            });
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
