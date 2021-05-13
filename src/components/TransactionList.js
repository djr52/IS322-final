import React from 'react';
import {connect} from 'react-redux';


const renderTransactionList = (allTransactions, accounts) =>{
    return allTransactions.map((transaction, index) =>{
        let classes = 'list-group-item d-flex justify-content-between align-items-center';
            return(
                <li key={transaction._id}
                    className={classes}>
                    <h5>
                        {
                            (()=> {
                                for(let i = 0; accounts.length; i++){
                                    if(transaction.accountId == accounts[i]._id){
                                        return '"' + transaction.name + '"' + " - " + accounts[i].name;
                                    }
                                }
                            })()
                        }
                    </h5>
                    <h5>{transaction.type} <span className="badge badge-info">${transaction.amount}</span></h5>
                </li>
            )
    })
};

class TransactionList extends React.Component{
    render(){
        const transactionList = renderTransactionList(this.props.transactions, this.props.accounts);
        return(
            <ul className="task-list list-group">
                {transactionList}
            </ul>
        )
    }

}
const mapStateProps = (state) => {
    return {
        transactions: state.transactions,
        accounts: state.accounts
    }
};

export default connect(mapStateProps)(TransactionList);