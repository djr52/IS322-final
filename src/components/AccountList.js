import React from 'react';
import { connect } from 'react-redux';

import AccountItem from "./AccountItem";
import {Link} from "react-router-dom";


class AccountList extends React.Component{
    render() {
        const accountItems = this.props.accounts.map(account => {
            return <li className="list-group-item">
                <AccountItem account={account} key={account._id} />
                <Link to={"account/" + account._id}>
                    <button type="button" className="btn btn-primary" style={{ float: 'right' }}>
                        View Details
                    </button>
                </Link>
            </li>
        });

        return (
            <ul className="task-list list-group">
                { accountItems }
            </ul>
        )
    }
}


const mapStateProps = (state) => {
    return {
        accounts: state.accounts,
    }
};

export default connect(mapStateProps)(AccountList);