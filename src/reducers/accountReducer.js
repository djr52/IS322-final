

const accountReducer = (state =[], action) =>{
    switch (action.type) {
        case 'SET_ACCOUNTS':
            return action.payload;
        case 'ADD_TRANSACTION':
            const transaction = action.payload;
            let accountList = [...state];
            if(transaction.type === "deposit"){
                accountList[transaction.accountId - 1].balance += parseFloat(transaction.amount);
            }
            else{
                accountList[transaction.accountId - 1].balance -= parseFloat(transaction.amount);

            }

            return accountList;

        default:
            return state;


    }
};

export default  accountReducer