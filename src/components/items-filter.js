import React from 'react';

const ItemsFilter = () => {
    return (
        <div className="container">
            <div class="btn-group" role="group" 
            aria-label="Basic example">
                <button type="button" 
                class="btn btn-info">All</button>
                <button type="button" 
                class="btn btn-outline-secondary">Active</button>
                <button type="button" 
                class="btn btn-outline-secondary">Done</button>
            </div>
        </div>
    );
}
export default ItemsFilter;
/*
//Вставка иконки через <i>
<i class="fas fa-igloo"></i> 
//Вставка иконки через <span>
<span class="fas fa-igloo"></span> 

*/