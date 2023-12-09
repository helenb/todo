import api from './api';

const postCategories = async (newCategoryValue, callback) => {
    api.post('/categories/', {
        text: newCategoryValue,
    })
        .then(() => {
            callback();
        })
        .catch((error) => {
            console.error(error);
        });
};

const getCategories = async () => {
    const response = await api.get('/categories/');
    return response;
};

export { postCategories, getCategories };
