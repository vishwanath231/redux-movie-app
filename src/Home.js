import React from 'react';
import Lists from './Pages/Lists';
import Index from './Components/index';
import styled from 'styled-components';

const Home = () => {
    return (
        <Container>
            <Index />
            <Lists />
        </Container>
    )
}

export default Home;

const Container = styled.div `
    background: #fff;
    /* background: #0C111B; */
`;