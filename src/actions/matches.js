import {database} from '../firebase/firebase';

export const setMatches = (matches) => (
    TYPE : 'SET_MATCHES',
    matches
);

export const startSetMatches = () => {
    return (dispatch)=>{
        return database.ref('matches')
                        .once('value')
                        .then((snapshot)=>{
                            const matches = [];
                        snapshot.forEach((match)=>{
                            matches.push({
                                id:child.key,
                                ...match.val()
                            });    
                        });
                 dispatch(setMatches(matches));
            });
    };
}
