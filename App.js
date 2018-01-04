import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import StartScreen from './components/Start';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(rootReducer);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StartScreen />
      </Provider>
    );
  }
}
