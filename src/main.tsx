import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './styles/index.css';
import './styles/tokens.css';

/**
 * React Strict Mode is turned off, because he is firing mount of components twice in a development mode
 * https://beta-reactjs-org-git-effects-fbopensource.vercel.app/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
