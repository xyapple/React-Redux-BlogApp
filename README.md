# React-Redux-Blog-App

### ReduxSimpleStarter
```
> npm install
> npm start
```
### Steps:
1) checkout the API
http://reduxblog.herokuapp.com/

2) set up Postman chorme extend

3) install react-router-dom
```
npm install --save react-router-dom@4.0.0
```
4) understand what react-router-dom do for us in the SPA(single page application)

5) install axios and redux-promise for actions
```
npm install --save axios redux-promise
```
6) pass promise into the middleware
```
//index.js
//axios and promise
import promise from 'redux-promise';
/pass the promise into middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
```
7) use axios to do the ajax call inside the actions
8) work on reducers.
```
//Use _.mapKeys()function
const state = _.mapKeys(posts, 'id')

state['4']
```
9) change the postIndex to include the reducer
```
//use this
export default connect(null, {fetchPosts})(PostIndex);

//instead of
mapDispatch() function
```
