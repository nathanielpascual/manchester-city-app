import React, { Component } from 'react';
import {firebaseMatches} from '../../../firebase/firebase'
import {Looper, ReverseArray} from '../../ui/misc';
import MatchesBlock from '../../ui/MatchesBlock';
import Slide from 'react-reveal/Slide';

class Blocks extends Component {

    state = {
        matches:[]
    }

    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapShot)=>{ 
            const array = Looper(snapShot);
            this.setState({matches:ReverseArray(array)});
       });
        
   }
    
   showMatches =(matches)=> (
       matches ? 
       matches.map((match)=> (
           <Slide bottom key={match.id}>
            <div className="item">
                <div className="wrapper">
                     <MatchesBlock match={match}/>
                </div>
            </div>
          </Slide>
       )):
       null
   )
        
   render() {
        return (
            <div className="home_matches">
             {this.showMatches(this.state.matches)}
            </div>
        );
    };
};

export default Blocks;