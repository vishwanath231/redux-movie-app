import React from 'react';
import styled from 'styled-components';
import Search from '../Search/Search';

const Header = () => {
    return (
        <>
            <Container>
                <div className="content">
                    <h1>Welcome.</h1>
                    <p>Millions of movies, TV show and people to discover. Explore now.</p>
                    <Search />
                </div>
            </Container>   
        </>
    )
}

export default Header;


const Container = styled.div `
    background: url('image/bg.jpg');
    width: 100%;
    height: auto;
    background-size: 100% 100%;
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
    position:relative;
    z-index: 999;

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color:rgba(14, 21, 58, .5); */
        background-color: rgba(12, 17, 27, .7);

        z-index: -1;
    }

    .content{
        margin:0 10px;
        padding: 5rem 0;
        color: #f5f5f5;
        font-family: 'Ubuntu',sans-serif;

        @media(min-width:768px){
            margin: 0 30px;
        }
    }
    .content h1{
        font-size: 40px;
        font-weight: 700;
        margin-bottom: .3rem;
    }
    .content p{
        font-size: 1.3rem;
        font-weight: 500;
        padding-bottom: 1.5rem;
    }
    .content .form {
        width:50%;
        display: flex;
        background-color: #fff;
        border-radius: 30px;
        margin: 0;
    }
    .content .form:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    }
    .content .form input{
        font-family: "poppins",sans-serif;
        width: 100%;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        border-radius: 30px;
        padding:12px 12px;
        margin-left: 10px;
        text-decoration: none;
    }
    input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    }

    .content .form button{
        font-family: "poppins",sans-serif;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        background-color: lightblue;
        padding: 12px;
        border-radius: 30px;
        cursor: pointer;
    }


    @media(max-width:768px){
   
    .content h1 {
        font-size: 34px;
        font-weight: 600;
        margin-bottom: .5rem;
    }
    .content p {
        font-size: 18px;
        font-weight: 500;
    }
    .content .form{
        width: 100%;
    }
    .content .form input{
        padding: 12px 2px;
    }
   
    .flex__container {
        margin: 0 .8rem;
    }
    ::placeholder{
        font-size: 15px;
    }
}
@media(max-width:475px){
    .flex__container {
        margin: 0 .5rem;
    }
}
`