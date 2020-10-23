import React from 'react';
import "./search.css";

function Search({searchTerm, handleInputChange}) {
    return (
        <div className="search">
            <label htmlFor="search">Filter:</label>
            <input 
            onChange={handleInputChange}
            value={searchTerm}
            name="search"
            type="text"
            placeholder="Filter employees by First or Last Name"
            id="search" 
            />
        </div>
    );
};

export default Search;