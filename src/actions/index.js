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

export const addTransaction = (name, amount, type, accountId) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: {
            name, amount, type, accountId
        }
    }
};

export const accountError = errorMessage => {
    return {
        type: 'ACCOUNTS_ERROR'
    }
};