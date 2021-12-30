const initialState = {
    counter: {
        number: 0
    },
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_COUNTER':
            const {number} = action;
            return {
                ...state,
                counter: {
                    ...state.counter,
                    number
                }
            }
        default:
            return state
    }
};