import React, { Component } from 'react';
import Searchbox from './Searchbox';
import Userbar from './Userbar';

class Header extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'cyan', height: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 50px' }}>
                <p style={{fontSize: 30}}>Movie Item</p>
                <Searchbox />
                <Userbar />
            </div>
        )
    }
}

export default Header;