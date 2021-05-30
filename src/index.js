import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FavouritesContextProvider} from "./store/favourites-context"

ReactDOM.render(
<FavouritesContextProvider>
    <App />
</FavouritesContextProvider>
,document.getElementById('root'));

