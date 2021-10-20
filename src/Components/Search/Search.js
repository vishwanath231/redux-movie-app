import React from 'react';
import useForm from './useForm';

const Search = () => {
    
    const { handleChange, handleSubmit, searchText } = useForm();

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="search" 
                    name="search"
                    value={searchText.search}
                    onChange={handleChange} 
                    placeholder="search for a movies..."
                    required 
                />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default Search;
