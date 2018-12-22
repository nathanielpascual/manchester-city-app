import React, { Component } from 'react'
import Stripes from '../../../resources/images/stripes.png';
import {Tag} from '../../ui/misc';
import Reveal from 'react-reveal/Reveal';
import HomeCards from './HomeCards';

class MeetPlayers extends Component {
    state = {
        show:false
    }
    render () {
        return (
            <Reveal
            fraction={0.7}
            onReveal={()=>{
                this.setState({show:true})
            }}>
            <div className="home_meetplayers"
                 style={{background:`#ffffff url(${Stripes})`}}>
                 
                 <div className="container">
                    <div className="home_meetplayers_wrapper">
                        <div className="home_card_wrapper"> 
                            <HomeCards show={this.state.show}/> 
                        </div>
                        <div className="home_text_wrapper">
                            <div>
                            <Tag background="#0e1731"
                                 size="100px"
                                 color="#ffffff"
                                 margin ="0 0 20px 0"
                                 >Meet</Tag>
                            </div>
                            <div>
                            <Tag background="#0e1731"
                                 size="100px"
                                 color="#ffffff"
                                 margin ="0 0 20px 0"
                                 >the</Tag>
                            </div>
                            <div>
                            <Tag background="#0e1731"
                                 size="100px"
                                 color="#ffffff"
                                 margin ="0 0 20px 0"
                                 >Players</Tag>
                            </div>
                            <div>
                            <Tag background="#ffffff"
                                 size="27px"
                                 color="#0e1731"
                                 margin ="0 0 27px 0"
                                 link={true}
                                 linkTo="/the_team"
                                 border="1px solid #0e1731"
                                 >Meet them here</Tag>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            </Reveal>
        )
    }
}

export default MeetPlayers;