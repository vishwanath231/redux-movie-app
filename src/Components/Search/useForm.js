import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useForm = () => {


    const [searchText, setSearchText] = useState({
        search: ''
    })

    const handleChange = (e) => {
        const { value, name } = e.target;

        setSearchText({
            ...searchText,
            [name]: value
        })
    }


    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('searchText', searchText.search);
        history.push(`/search/${searchText.search}`)
        setSearchText('')
    }


    return { handleChange, handleSubmit, searchText }
}

export default useForm
