import React, { Component } from 'react';
import { getMoviesByName } from '../../actions/imdbActions';
import { connect } from 'react-redux';

class Searchbox extends Component {
    state = {
        search: '',
        page: 1
    }

    componentDidMount() {
        this.onSearch("Batman");
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activePage != this.props.activePage) {
            this.onSearch(this.state.search, this.props.activePage);
        }
    }

    onSearch = (search, page = 1) => {
        this.setState({
            search,
            page
        })

        if (search.length > 3) {
            this.props.moviesByName(search, page)
        }
    }

    render() {
        return (
            <div style={{ width: '50%' }}>
                <input className="form-control" type="text" placeholder="Movie Title" onChange={(e) => this.onSearch(e.target.value)}></input>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activePage: state.repositories.activePage
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        moviesByName: (name, page) => dispatch(getMoviesByName(name, page)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbox);