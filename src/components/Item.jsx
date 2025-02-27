import React from "react";

const Item = ({ item, onDelete, onEdit }) => {
    // Render a single item
    // Add a Delete and Edit button


    // Render a single item
    // Add a Delete and Edit button

    return (
        <div className="item">
            <h3>{item.name}</h3>
            <p>{item.status}</p>
            <button
                onClick={() => { onDelete(item.id); }} // Delete button
            >
                Delete
            </button>
            <button 
                onClick={() => onEdit(item)} // Corrected to pass a function reference
            >
                Edit
            </button>
        </div>
    );
};

export default Item;


