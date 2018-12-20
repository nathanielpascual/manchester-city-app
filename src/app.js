
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {firebase} from './firebase/firebase';
import AppRouter, { history }  from './routers/AppRouters';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './stores/configureStore';
import {login,logout} from './actions/auth';
import 'normalize.css/normalize.css'
import './styles/styles.scss'


//import LoadingPage from './components/LoadingPage';


 const store = configureStore();

const App = ()=> {
   return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
   )
};


ReactDOM.render(<App/>,document.getElementById('app'));

// let hasRendered = false;
// const renderApp = ()=> {
//     if(!hasRendered)
//     {
//         ReactDOM.render(jsx,document.getElementById('app'));
//         hasRendered = true;
//     }
// }

// firebase.auth().onAuthStateChanged((user)=>{
//  if(user){
//     store.dispatch(login(user.uid));
//     renderApp();
//     if(history.location.pathname === '/'){
//         history.push('/dashboard')
//     }
//  }
//  else{
//      store.dispatch(logout());
//     renderApp();
//     history.push('/'); 
// }
// });
