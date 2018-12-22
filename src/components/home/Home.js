import React from 'react'
import Featured from './featured/Featured';
import Matches from './matches/MatchesHome';
import MeetPlayers from './meetPlayers/MeetPlayers';
import Promotion from './promotions/Promotion';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    )
}

export default Home;