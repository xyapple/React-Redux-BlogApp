import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//axios and promise
import promise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/postIndex';
import PostsNew from './components/postsNew'
//import react-router
import{BrowserRouter, Route, Switch} from 'react-router-dom';

//pass the promise into middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/" component={PostIndex} />
            </Switch>

        </div>

    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
