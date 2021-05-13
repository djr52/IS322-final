import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const AccountItem = props => {
    return (
        <li className="list-group-item">
            <h1>{ props.account.name}</h1>
            <h5>Current Balance: ${props.account.balance}</h5>
            <li style={{ float: 'right' }}>
                <Link to={"account/" + props.account._id}>View</Link>
                View Details
            </li>
        </li>
    )
};

export default AccountItem;