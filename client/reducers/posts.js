// a reduer takes in tow things:

// 1. the action (info about what happened)
// 2. copy of the current state

export default (state = [], action) => {
    console.log('Post',state, action);
    const i = action.index;
    switch(action.type){
        case 'INCREMENT_LIKES':
            return [
                ...state.slice(0,i), // before the one are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1) // after the one are updating
            ];
        default:
            return state;
    }
}
