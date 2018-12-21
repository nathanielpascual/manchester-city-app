import React, { Component } from 'react';

import {firebaseMatches} from '../../../firebase/firebase'
import {Looper, ReverseArray} from '../../ui/misc';

class Blocks extends Component {

    state = {
        matches:[]
    }

    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapShot)=>{
            const array = Looper(snapShot);
            console.log(array);
            this.setState({matches:ReverseArray(array)});
       });
        
   }
    
   showMatches =(state)=> (
       <div>match</div>
   )
        
   render() {
        return (
            <div className="home_matches">
             
                
            </div>
        );
    }
}

export default Blocks;