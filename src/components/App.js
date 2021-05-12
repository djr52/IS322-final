import React from 'react';
import { connect } from 'react-redux';

import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from "./Navbar";

import AccountList from "./AccountList"

import '../styles/App.css';
import axios from 'axios';

import {setAccounts, setTransactions, accountError} from "../actions";


class App extends React.Component {

  componentDidMount() {
    this.getAccountData();
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
