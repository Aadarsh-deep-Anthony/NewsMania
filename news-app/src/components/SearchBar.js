import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
        setTerm('');
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input 
                type="text" 
                value={term} 
                onChange={(e) => setTerm(e.target.value)} 
                placeholder="Search for news..." 
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
