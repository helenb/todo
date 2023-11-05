import React from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({
    addCategory,
    setNewCategoryValue,
    newCategoryValue,
    showConfirmCagtegoryText,
}) => {
    return (
        <>
            <form onSubmit={addCategory}>
                <label htmlFor="new-category">Add a new category</label>{' '}
                <input
                    type="text"
                    id="new-category"
                    value={newCategoryValue}
                    onChange={(e) => setNewCategoryValue(e.target.value)}
                />
                <input type="submit" value="Add" />
                {/* Use this syntax instead of && - see https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx */}
                {showConfirmCagtegoryText ? (
                    <p>Category {newCategoryValue} added</p>
                ) : null}
            </form>
        </>
    );
};

AddCategory.propTypes = {
    newCategoryValue: PropTypes.string.isRequired,
    addCategory: PropTypes.func.isRequired,
    setNewCategoryValue: PropTypes.func.isRequired,
    showConfirmCagtegoryText: PropTypes.bool.isRequired,
};

export default AddCategory;
