import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

class Navbar extends React.Component {
    state = { currentPage: '/' }

    isActiveTab(tabName) {
        return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        this.setState({ currentPage: tabName })
    }

    render () {
        return (
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/')} to="/"
                          onClick={event => this.onTabClick(event, '/')}>
                        Accounts
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/page2')} to="/page2"
                          onClick={event => this.onTabClick(event, '/page2')}>
                        Transaction History
                    </Link>
                </li>
            </ul>
        )
    }

};

export default Navbar;