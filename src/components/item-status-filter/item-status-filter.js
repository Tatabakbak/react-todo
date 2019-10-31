import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({filter, onFilterChange}) => {

    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    const renderedButtons = buttons.map(({name, label}) => {
        const isSelected = filter === name;
        const className = isSelected ? ' btn-info' : ' btn-outline-secondary';
        return (
            <button type="button"
                    className={`btn ${className}`}
                    key={name}
                    onClick={() => onFilterChange(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {renderedButtons}
        </div>
    );

};

export default ItemStatusFilter;