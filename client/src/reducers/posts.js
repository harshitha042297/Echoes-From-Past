// reducer is a function, accepts state and action.
// based on the action type ie. action.type=='create', then we perform some logic -> return action or state changed by the action
// multiple if statements for different action therefore, we have switch statement 
// always state has some intial value "[]". It cannot be empty
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts=[],action) => {
    switch(action.type){
        case CREATE:
            return [...posts,action.payload];
        case FETCH_ALL:
            return action.payload;
        case UPDATE:
            return posts.map((post)=>post._id===action.payload._id ? action.payload : post);
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts;
    }
}