import React from "react";
import {connect} from "react-redux";

class AccountPage extends React.Component{
    accountID = this.props.match.params.id;
    goToHome = () => {
        this.props.history.push(`/`);
    };

    render() {
        return (
            <div className="page-variable">
                <h1>You Clicked on { this.props.match.params.id }</h1>
                <button onClick={this.goToHome}>Go To Home</button>
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