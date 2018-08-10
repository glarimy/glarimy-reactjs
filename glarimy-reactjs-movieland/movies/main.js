import "./styles/glarimy.css";
import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import MovieList from "./components/MovieList.jsx";
import store from "./store/store.js";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<center>
					<h1>Glarimy Movie Land</h1>
					<Link to="/movies/hindi">Hindi</Link> | <Link to="/movies/english">English</Link>
					<Route path='/movies/hindi' render={(props) => (
						<MovieList {...props} url={"data/hindi.json"} language={"Hindi"}/>
					)}/>
					<Route path='/movies/english' render={(props) => (
						<MovieList {...props} url={"data/english.json"}  language={"English"}/>
					)}/>
				</center>
			</div>
		</Router>
	</Provider>,
	document.getElementById('movieland')
);