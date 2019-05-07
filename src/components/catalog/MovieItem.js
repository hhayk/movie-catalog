import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class MovieItem extends Component {
    render() {
        const { Poster, Title, Type, Year, imdbID } = this.props.movie;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Poster} />
                <Card.Body style={{ textAlign: 'left' }}>
                    <Card.Title>Name: {Title}</Card.Title>
                    <Card.Title>Year: {Year}</Card.Title>
                    <Card.Title>imdbID: {imdbID}</Card.Title>
                    <Card.Title>Type: {Type}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default MovieItem;