import React, { useEffect, useState } from 'react';
import api from '../apis/api';

import AddCategory from './AddCategory';

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);
    const [newCategoryValue, setNewCategoryValue] = useState('');
    const [showConfirmCagtegoryText, setShowConfirmCategoryText] =
        useState(false);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await api.get('/categories/');
        setCategories(response.data);
    };

    const addCategory = async (e) => {
        e.preventDefault();
        api.post('/categories/', {
            text: newCategoryValue,
        })
            .then(() => {
                getCategories();
                setShowConfirmCategoryText(true);
                setTimeout(() => {
                    setShowConfirmCategoryText(false);
                }, 3000);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // from testing
    // const updateCategory = async () => {
    //     console.log('updateCategory method');
    //     api.put('/categories/1/', { text: 'changing from start' })
    //         .then(() => {
    //             console.log('posted');
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

    const categoriesMarkup = categories.map((category, id) => {
        return (
            <li key={category.id}>
                <h3>{category.text}</h3>
            </li>
        );
    });

    return (
        <>
            <h2>Categories</h2>
            <ul>{categoriesMarkup}</ul>
            <AddCategory
                addCategory={addCategory}
                newCategoryValue={newCategoryValue}
                setNewCategoryValue={setNewCategoryValue}
                showConfirmCagtegoryText={showConfirmCagtegoryText}
            />
        </>
    );
};

export default CategoryPage;
