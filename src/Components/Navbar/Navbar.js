import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [profile, setProfile] = useState("")
    const [show, setShow] = useState(false)

    const [scrolled, setScrolled] = useState(false)

    const showUserBox = () => setShow(!show)
    

    const handelScroll = () => {
        const offset=window.scrollY;

        if(offset > 20 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(() => {
        
        const loginUsername = localStorage.getItem('loginUsername');
        const loginEmail = localStorage.getItem('loginEmail');
        const loginProfile = localStorage.getItem('loginProfile');
        setName(loginUsername)
        setEmail(loginEmail);
        setProfile(loginProfile)
        
        window.addEventListener('scroll', handelScroll);

    }, [])


    return (
        <>
            <Navabr>
                <div className={ scrolled ? "navbar scroll" : "navbar" }>
                    <nav className="nav">
                        <div className="logo">
                            <img src="image/logo.png" alt="logo"/>
                        </div>

                        
                        <div className="login__box" onClick={showUserBox}>
                            <img src={profile} alt=""/>
                        </div>
                        {
                            show ? (
                                
                                <div className="user__box">
                                    <p>{name}</p>
                                    <div className="email">{email}</div>
                                    <Link to="/" className="logout">logout</Link>
                                </div>
                                
                            ) : null
                        }
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
        padding: 10px 38px 5px 38px;
    }
    .navbar.scroll {
        background: #131A27;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }

    .nav {
        display: flex;
        justify-content: space-between;
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


        .user__box {
            position: absolute;
            background: #fff;
            right: 5px;
            top: 55px;
            padding: 1rem;
            border-radius: 6px;
            font-family: 'sen', sans-serif;

            .email{
                padding: 1rem 0;
               
            }

            .logout {
                cursor: pointer;
                text-decoration: none;
                &:hover{
                    color: crimson;
                }
            }
        }
    }
`;
