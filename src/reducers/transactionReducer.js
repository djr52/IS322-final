

const transactionReducer = (state =[], action) =>{
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return action.payload;
        case 'ADD_TRANSACTION':
            const transaction = action.payload;
            transaction._id = state.length + 1;
            let transactionList = [...state];
            transactionList.push(transaction);
            return transactionList;
        default:
            return state;


    }
};
export default  transactionReducer;
