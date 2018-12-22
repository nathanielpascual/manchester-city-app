import React from 'react'
import {Tag} from '../../ui/misc';
import Blocks from './Blocks';

const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag  
                    background="#0e1731"
                    size="50px"
                    color="#ffffff">
                MATCHES
                </Tag>
               <Blocks/>
                <Tag  
                    background="#ffffff"
                    size="22px"
                    color="#0e1731"
                    link={true}
                    linkTo="/the_team" >
                See more Matches
                </Tag>
            </div>
        </div>
    )
}

export default MatchesHome;