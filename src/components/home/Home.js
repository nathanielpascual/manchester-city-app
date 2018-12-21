import React from 'react'
import Featured from './featured/Featured';
import Matches from './matches/MatchesHome';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>

            <Matches/>
        </div>
    )
}

export default Home;