export const setAccounts = accounts => {
    return {
        type: 'SET_ACCOUNTS',
        payload: accounts
    }
};
export const setTransactions = transactions => {
    return {
        type: 'SET_TRANSACTIONS',
        payload: transactions
    }
};
export const accountError = errorMessage => {
    return {
        type: 'ACCOUNTS_ERROR'
    }
};