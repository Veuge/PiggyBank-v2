export const ACCOUNTS_ADD_ACCOUNT = "ACCOUNTS_ADD_ACCOUNT";

export interface IAccount {
    name: string;
    balance: number;
    currency: string; // TODO: create list of possible currencies.
}

const initialState = {
    accountList: [],
    walletList: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACCOUNTS_ADD_ACCOUNT: {
            return {
                ...state,
                accountList: [ ...state.accountList, action.newAccount ]
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;
