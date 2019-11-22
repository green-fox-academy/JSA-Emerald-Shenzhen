import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)))

export default store
