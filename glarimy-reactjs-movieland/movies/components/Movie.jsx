import React from "react";

class Movie extends React.Component {
    render() {
        let stars = "";
        for(let i=0; i<this.props.movie.rating; i++)
            stars += "* ";
        return (<div>{ this.props.movie.title }{stars}</div>)
    }
};

export default Movie;
