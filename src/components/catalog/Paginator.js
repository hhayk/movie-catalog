import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivePage } from '../../actions/imdbActions';
import Pagination from 'react-bootstrap/Pagination'

class Paginator extends Component {
    state = {
        active: 1
    }

    onItemClick = (idx) => {
        this.setState({ active: idx });
        this.props.activePage(idx);
    }

    render() {
        let itemPerPage = 10;
        let totalResults = this.props.totalResults;
        let pages = Math.floor(totalResults / itemPerPage);

        return (
            <Pagination size="lg">
                {
                    [...Array(pages).keys()]
                        .map(idx => idx + 1)
                        .map(idx =>
                            <Pagination.Item key={idx} active={idx === this.state.active} onClick={(e) => this.onItemClick(idx)}>
                                {idx}
                            </Pagination.Item>
                        )
                }
            </Pagination>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.repositories.movies,
        totalResults: state.repositories.totalResults
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        activePage: (page) => dispatch(setActivePage(page)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);