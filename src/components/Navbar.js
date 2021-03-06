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
            <div className="navbar navbar-light bg-light rounded border-bottom shadow-sm p-3 mb-5 rounded">
                <ul className='nav  page-tabs'>
                    <li className='nav-item'>
                        <Link className={this.isActiveTab('/')} to="/"
                              onClick={event => this.onTabClick(event, '/')}>
                            Accounts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={this.isActiveTab('/transactions')} to="/transactions"
                              onClick={event => this.onTabClick(event, '/transactions')}>
                            Transaction History
                        </Link>
                    </li>
                </ul>
            </div>

        )
    }

};

export default Navbar;