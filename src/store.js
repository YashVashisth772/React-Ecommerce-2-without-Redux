import {createStore} from 'react';

export default createStore(rootReducer, initialState, applyMiddleware(thunk,logger))



 