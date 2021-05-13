import React from 'react';
import { connect } from 'react-redux';

import AccountItem from "./AccountItem";


class AccountList extends React.Component{
    render() {
        const accountItems = this.props.accounts.map(account => {
            return <AccountItem account={account} key={account._id} />
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