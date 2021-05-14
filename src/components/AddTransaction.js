import React from 'react';
import { connect } from "react-redux";

import {addTransaction} from "../actions";


class AddTransaction extends React.Component{
    state = {name: '', amount: '', transactionType: '',};
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.addTransaction(this.state.name, this.state.amount, this.state.transactionType, this.props.accountId);
        this.setState({name:'', amount: '', transactionType: '',})

    };

    render(){
        return(
            <form onSubmit={this.onFormSubmit}
                  style={{padding: '0 12px 12px'}}
            >
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control
                    " name="name" value={this.state.name}
                           onChange={event => this.setState({name: event.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input type="text" className="form-control
                    " name="name" value={this.state.amount}
                           onChange={event => this.setState({amount: event.target.value})}/>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="deposit" name="flexRadioDefault" id="flexRadioDefault1"
                           onChange={event => this.setState({transactionType: event.target.value})}/>
                        <label className="form-check-label">
                            Deposit
                        </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="withdraw" name="flexRadioDefault" id="flexRadioDefault2"
                           onChange={event => this.setState({transactionType: event.target.value})}/>
                    <label className="form-check-label">
                        Withdraw
                    </label>
                </div>


                <input type="submit" className="btn btn-success" value={ 'Add Transaction' } />
            </form>
        )
    }
}

export default connect(null, {addTransaction})(AddTransaction);