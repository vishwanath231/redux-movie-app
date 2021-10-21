import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useForm = () => {

    // INITIAL STATE
    const [searchText, setSearchText] = useState({
        search: ''
    })


    // HANDLE CHANGE
    const handleChange = (e) => {
        const { value, name } = e.target;

        setSearchText({
            ...searchText,
            [name]: value
        })
    }


    // HISTORY
    const history = useHistory();


    // HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('searchText', searchText.search);
        history.push(`/search/${searchText.search}`)
        setSearchText('')
    }


    return { handleChange, handleSubmit, searchText }
}

export default useForm
