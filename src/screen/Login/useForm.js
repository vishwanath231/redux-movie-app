import { googleProvider, auth } from '../config/Firebase';
import { useHistory } from 'react-router-dom';

const useForm = () => {

    const history = useHistory();

    // GOOGLE SIGN IN
    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
        .then((res) => {
            const users = res.user
            
            // SET LOCALSTORAGE
            localStorage.setItem('loginUsername', users.displayName)
            localStorage.setItem('loginEmail', users.email)
            localStorage.setItem('loginProfile', users.photoURL)

            history.push('/home')
        })

    };

    return { signInWithGoogle }
}

export default useForm;
