// a reduer takes in tow things:

// 1. the action (info about what happened)
// 2. copy of the current state

function postComments(state = [], action){
    console.log('Comment',state, action);
    switch(action.type){
        case 'ADD_COMMENT':
            // return the new state with the new comment
            return [...state,{
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            return[
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
            return state;
        default:
            return state;
    }
    return state;
}

export default (state = [], action) => {
    if(typeof action.postId !== undefined ){
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}
