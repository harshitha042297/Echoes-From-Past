import * as api from '../api';
import { FETCH_ALL,UPDATE,DELETE,LIKE,CREATE } from '../constants/actionTypes';
// import everything from actions as api; we will be able to use fetch posts

// create action -- ACTION CREATORS - funtions that return actions
// function inside another function
// ACTion - object - getPosts

export const getPosts=() => async (dispatch) =>{

    try{
        // getting response from api 
        // api.fetchpost will get data and stored in {data} object
        const {data} = await api.fetchPosts();
        dispatch({type:FETCH_ALL,payload:data});
        // using redux to dispatch action from the data from our backend 
    }catch(error){
        console.log(error.message);
    }

    // payload - store all posts
    // const action={type: 'FETCH_ALL',payload: []}
    // dispatch(action);
}

export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  