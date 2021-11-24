import axios from 'axios';



// Action Types
const GET_ALL_POSTS = 'GET_POSTS';


// Action Creators
const _getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      const { data: posts } = await axios.get('/api/posts');
      const action = _getAllPosts(posts)
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  }
}

export default function(state = [], action) {
  switch (action.type){
    case GET_ALL_POSTS:
      return action.posts
    default:
      return state;
  }
}
