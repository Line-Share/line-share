import axios from 'axios';

// Action Types
const GET_ALL_POSTS = 'GET_POSTS';
const CREATE_POST = 'CREATE_POST';


// Action Creators
export const _getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

const _createPost = (post) => {
  return {
    type: CREATE_POST,
    post
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

export const createPost = (post, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/posts`, post);
      const action = _createPost(data);
      dispatch(action);
      history.push('/feed')
    } catch (error) {
      console.error(error)
    }
  }
}



export default function(state = [], action) {
  switch (action.type){
    case GET_ALL_POSTS:
      return action.posts
    case CREATE_POST:
      return [...state, action.post]
    default:
      return state;
  }
}
