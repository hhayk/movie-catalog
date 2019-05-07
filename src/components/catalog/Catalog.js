import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import Paginator from './Paginator';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Catalog extends Component {
    render() {
        const { movies, error } = this.props;

        return (
            <div>
                {error && <span style={{ color: 'red' }} > {error}</span>}
                <Row >
                    {
                        movies
                            .map((movie, i) =>
                                <Col key={i} xs={6} md={4} lg={2} style={{ marginBottom: 30 }}>
                                    <MovieItem movie={movie} />
                                </Col>
                            )
                    }
                </Row>
                <Paginator />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.repositories.movies,
        error: state.repositories.error
    };
}

export default connect(mapStateToProps, null)(Catalog);