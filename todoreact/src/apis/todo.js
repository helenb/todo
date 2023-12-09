import api from './api';

const postTodo = async (newTodoValue, callback) => {
    api.post('/todos/', {
        text: newTodoValue.text,
        due_date: newTodoValue.dueDate,
        done: false,
        category: newTodoValue.category,
    }).then(
        () => {
            callback();
        },
        (error) => {
            console.error(error);
        },
    );
};

const putToggleDone = async (item, callback) => {
    api.put(`/todos/${item.id}/`, {
        done: item.done ? false : true,
        text: item.text,
        category: item.category,
    })
        .then(() => {
            callback();
        })
        .catch((error) => {
            console.error(error);
        });
};

const getTodos = async () => {
    const response = await api.get('/todos/');
    return response;
};

export { postTodo, putToggleDone, getTodos };
