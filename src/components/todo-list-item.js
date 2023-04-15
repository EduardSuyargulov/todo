import React from 'react';

const TodoListItem = ({label, important = false}) =>{
    const itemStyle= {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal',
    }
    return (
        <span>
            <span style={itemStyle}>
                {label}
            </span>
            <button type="button" className="btn btn-outline-success float-right">
                <i className="fa fa-exclamation"/>
            </button>
            
            <button type="button" className="btn btn-outline-danger float-right">
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    );
}
export default TodoListItem;