import React from 'react';
import { connect } from 'react-redux';

import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from "./Navbar";

import AccountList from "./AccountList"
import TransactionList from "./TransactionList";
import AccountPage from "./AccountPage";

import '../styles/App.css';
import axios from 'axios';

import {setAccounts, setTransactions, accountError} from "../actions";


class App extends React.Component {

  componentDidMount() {
    this.getAccountData();
    this.getTransactionData()
  }

  getAccountData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {
          this.props.setAccounts(response.data);
        }).catch(error => {
      this.props.accountError();
    });
  }
  getTransactionData() {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/transactions')
            .then(response => {
                this.props.setTransactions(response.data);
            }).catch(error => {
            this.props.accountError();
        });
    }
  render(){
    return (
        <div className="container">
            <BrowserRouter>
                <Navbar/>
                <div>
                    <Route path="/" exact component={AccountList} />
                    <Route path="/transactions" component={TransactionList}/>
                    <Route path="/account/:id" component={AccountPage} />

                </div>

            </BrowserRouter>

        </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        errorMessage: state.getAccounts
    };
};

export default connect(mapStateToProps,{setAccounts, setTransactions, accountError})(App);

//Really wish I couldve added more features to this project, but unfortunately other classes got in the way, looking at you IS375.
// Planning to work on this over the summer for fun, wish me luck!