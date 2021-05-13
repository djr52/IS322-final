import React from 'react';
import { connect } from 'react-redux';

const AccountItem = props => {
    return (
        <li className="list-group-item">
            <h1>{ props.account.name}</h1>
            <h5>Current Balance: ${props.account.balance}</h5>
            <button type="button"
                    className="btn btn-primary" style={{ float: 'right' }}>
                View Details
            </button>
        </li>
    )
};

export default AccountItem;