import "./styles/glarimy.css";
import React from "react";
import ReactDOM from 'react-dom';
import Library from "./components/Library.jsx";
import { Provider } from 'react-redux';

import store from "./store/store.js";

ReactDOM.render(
	<Provider store={store}>
		<Library/>
	</Provider>, 
	document.getElementById('library')
);