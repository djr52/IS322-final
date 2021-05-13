
const DEFAULT_STATE = {
    getAccounts: '',
    getTransactions: ''
};

const errorReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'GET_ACCOUNT_ERROR':
            return {
                ...state,
                getAccounts: 'Unable to get Accounts from API. Please Try again later'
            };
        case 'GET_TRANSACTION_ERROR':
            return{
                ...state,
                getTransactions: 'Unable to get Transactions from API. Please Try again later'
            };
        default:
            return true;
    }
};

export default errorReducer;