import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './screen/Login/Login'
import Home from './Home'
import MovieInfos from './Pages/Info/MovieInfo/MovieInfos';
import TvShowInfos from './Pages/Info/TvShowInfo/TvShowInfos';
import PersonInfo from './Pages/Info/PersonInfo/PersonInfo';
import TrendingInfo from './Pages/Info/TrendingInfo/TrendingInfo';
import Search from './Pages/Search/Search';

const App = () => {
    return (
        <>
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/Home" component={Home} />
                <Route path="/movie/:name/:id" component={MovieInfos} />
                <Route path="/tvShow/:name/:id" component={TvShowInfos} />
                <Route path="/person/:name/:id" component={PersonInfo} />
                <Route path="/trending/:name/:id" component={TrendingInfo} />
                <Route path="/search/:name" component={Search} />
            </Router>
        </>
    )
}

export default App;
