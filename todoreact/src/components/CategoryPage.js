import React, { useEffect, useState } from 'react';
import api from '../apis/api';
import { postCategories, getCategories } from '../apis/categories';

import AddCategory from './AddCategory';

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);
    const [newCategoryValue, setNewCategoryValue] = useState('');
    const [showConfirmCagtegoryText, setShowConfirmCategoryText] =
        useState(false);
    const [categoryAdded, setCategoryAdded] = useState(false);

    useEffect(() => {
        updateCategories();
    }, []);

    useEffect(() => {
        setShowConfirmCategoryText(true);
        setTimeout(() => {
            setShowConfirmCategoryText(false);
            setCategoryAdded(false);
        }, 3000);
    }, [categoryAdded]);

    const updateCategories = async () => {
        const response = await getCategories();
        setCategories(response.data);
    };

    const addCategoryCallback = () => {
        updateCategories();
        setCategoryAdded(true);
    };

    const addCategory = async (e) => {
        e.preventDefault();
        postCategories(newCategoryValue, addCategoryCallback);
    };

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
