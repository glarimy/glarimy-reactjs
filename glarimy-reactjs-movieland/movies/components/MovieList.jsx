import React from "react";
import {connect} from 'react-redux';
import Movie from "./Movie.jsx";
import {fetchMoviesFromServer} from "../actions/actions.js";

class MovieList extends React.Component {
    componentDidMount(){this.props.fetchMovies()}
    render() {
        let dom = "";
        if(this.props.movies != null)
            dom = this.props.movies.map(movie => <Movie movie={movie} key={movie.id}/>);
        return (<div>{ dom }</div>)
    }
};

const mapStateToProps = (state, props) => {return {movies: state.reducer.movies[props.language]}}
const mapDispatchToProps = (dispatch, props) => {return {fetchMovies: () => dispatch(fetchMoviesFromServer(props.url))}};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);