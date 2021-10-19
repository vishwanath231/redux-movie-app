import React from 'react';
import google from './google.png'
import styled from 'styled-components';
import useForm from './useForm';

const Login = () => {

    const { signInWithGoogle } = useForm();

    return (
        <div>
            <Container >
                <Box onClick={signInWithGoogle}>
                    <img src={google} alt="" />
                    <p>sign in with google</p>
                </Box>
            </Container>
        </div>
    )
}

export default Login;



const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 1rem;
`; 

const Box = styled.div `
    display: flex;
    align-items: center;
    background: #F5F5F5;
    padding: .7rem 2rem;
    border-radius: 6px;
    cursor: pointer;

    p{
        font-family: 'Montserrat',sans-serif;
        font-size: .9rem;
        font-weight: 600;
        margin-left: 10px;
        text-transform: uppercase;
    }
`;