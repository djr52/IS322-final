import React from "react";
import {connect} from "react-redux";

import AccountItem from "./AccountItem";


class AccountPage extends React.Component{
    pageID = this.props.match.params.id;


    goToHome = () => {
        this.props.history.push(`/`);
    };

    render() {
        const accountItem = this.props.accounts.map(account => {
            if(this.pageID == account._id){
                console.log(account._id);
                return <AccountItem account={account} key={account._id} />
            }

        });
        const accountTransactions = this.props.transactions.map(transaction =>{
            let classes = 'list-group-item d-flex justify-content-between align-items-center';
            if(this.pageID == transaction.accountId){
                return <li key={transaction._id} className={classes}>
                    <h5>{transaction.name} </h5>
                    <h5>{transaction.type} <span className="badge badge-info">${transaction.amount}</span></h5>

                </li>
            }

        });

        return (
            <div>

                {accountItem}

                    <ul className="task-list list-group-flush">
                        {accountTransactions}
                    </ul>

                <button className="btn btn-primary" onClick={this.goToHome}>Go To Home</button>


            </div>
        );
    }
}

const mapStateProps = (state) => {
    return {
        transactions: state.transactions,
        accounts: state.accounts
    }
};

export default connect(mapStateProps)(AccountPage);