import React,{Component} from 'react';
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate';
import Player from '../../../resources/images/players/Otamendi.png';
import PlayerCard from '../../ui/PlayerCard';

class HomeCards extends Component {

    state={
        show : this.props.show,
        cards : [
            {
                bottom: 90,
                left:300
            },
            {
                bottom: 60,
                left:200
            },
            {
                bottom: 30,
                left:100
            },
            {
                bottom: 0,
                left:0
            }
        ]
    }
    
    showAnimateCards = () => (
        this.state.cards.map((card,i)=>(
            <Animate
              key={i}
              show={this.props.show}
              start={{
                bottom: 0,
                left:0
              }}

              enter={{
                  bottom:[card.bottom],
                  left:[card.left],
                  timing : {duration:500, ease : easePolyOut}
              }}
            >
              {({left,bottom})=>{
                  return (
                      <div style={{
                          position:'absolute',
                          bottom,
                          left
                      }}>
                         <PlayerCard 
                            number="30"
                            name="Nicolas"
                            lastname = "Otamendi"
                            background={Player}/>
                      </div>
                  )
              }}
            </Animate>
        ))
    )

    render() {
        return (
            <div>
                {this.showAnimateCards()}
            </div>
        )
    }
}

export default HomeCards