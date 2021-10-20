import React from 'react';
import styled from 'styled-components';
import logos from './logos.png'
import { Link } from 'react-router-dom';

const Navbar = ({ handleChange, handleSubmit, searchText }) => {


    

    

    return (
        <>
            <Navabr>
                <div className="navbar">
                    <nav className="nav">
                        <Link to="/home">
                            <div className="logo">
                                <img src={logos} alt="logo"/>
                            </div>
                        </Link>
                        
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                onChange={handleChange}
                                value={searchText.search}
                                name="search"
                            />
                        </form>
                    </nav>
                </div>
            </Navabr>
        </>
    )
}

export default Navbar;


const Navabr = styled.div `

    .navbar{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
        padding: 10px;
        background: #131A27;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }

    .nav {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;

        .logo img {
            width: 80px;
        }
        .login__box {
            cursor: pointer;

            img {
                border-radius: 50%;
                width: 40px;
            }
        }


        form {
            width: 220px;

            @media(min-width:768px){
                width: 300px;
            }
        }
        input{
            width: 100%;
            padding: .7rem 1rem;
            border-radius: 30px;
            outline-color: cornflowerblue;
            font-size: .9rem;
            font-weight: 500;
            font-family: 'Sen',sans-serif;
            border: none;
        }

        @media(min-width:320px){
            justify-content: space-between;
            flex-direction: row;
        }
    }
`;
