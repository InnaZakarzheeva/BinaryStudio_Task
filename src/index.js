import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/index.css';
import App from './App';
import recipe from './redux/reducer/reducer';

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('cook_state', serialisedState);
    } catch (err) {

    }
};

const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('cook_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadState();
export const store = createStore(recipe, oldState);

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)

store.subscribe( () => {
    saveState(store.getState());
})
