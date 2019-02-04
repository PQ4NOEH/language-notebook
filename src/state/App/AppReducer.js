const initialState = {
    dictionaryQuickSearchVisible:false
};

const AppReducer = (state=initialState, action) =>{
    if(action.type === 'SWAP_DICTIONARY_QUICK_SEARCH_VISIBILITY'){
        return  { dictionaryQuickSearchVisible: !state.dictionaryQuickSearchVisible };
    }

    return state;
}

export default AppReducer;