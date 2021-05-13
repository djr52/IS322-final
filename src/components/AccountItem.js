import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const AccountItem = props => {
    return (
        <div className="container">
            <h1>{ props.account.name}</h1>
            <h5>Current Balance: ${props.account.balance}</h5>

        </div>
    )
};

export default AccountItem;