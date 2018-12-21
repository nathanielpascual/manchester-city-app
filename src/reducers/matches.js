const matchesReducerDefaultState=[];

export default (const categoriesReducerDefaultState=[],action)=>{
    switch(action.type)
    {
        case 'SET_MATCHES': {
            return action.matches;
        }
        default:
            state;
    }
}