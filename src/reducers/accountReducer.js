

const accountReducer = (state =[], action) =>{
    switch (action.type) {
        case 'SET_ACCOUNTS':
            return action.payload;
        default:
            return state;


    }
};

export default  accountReducer;