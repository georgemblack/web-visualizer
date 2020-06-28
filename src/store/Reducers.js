import { combineReducers } from "redux";
import { FETCH_POSTS_SUCCESS } from "./Actions";
import initialState from "./State";
import { FETCH_AUTH_TOKEN_SUCCESS } from "./actions/Auth";
import { GET_LIKES_SUCCESS } from "./actions/Likes";

function authToken(authToken = initialState.authToken, action) {
  switch (action.type) {
    case FETCH_AUTH_TOKEN_SUCCESS:
      return action.token;
  }
  return authToken;
}

function posts(posts = initialState.posts, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.posts;
  }
  return posts;
}

function likes(likes = initialState.likes, action) {
  switch (action.type) {
    case GET_LIKES_SUCCESS:
      return action.likes;
  }
  return likes;
}

const rootReducer = combineReducers({
  authToken,
  posts,
  likes,
});

export default rootReducer;
