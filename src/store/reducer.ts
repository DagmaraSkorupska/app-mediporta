import { combineReducers } from "redux";
import {
  FETCH_TAGS_REQUEST,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
} from "./actions.ts";

const tagsReducer = (
  state = { loading: false, error: null, tags: [] },
  action
) => {
  switch (action.type) {
    case FETCH_TAGS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TAGS_SUCCESS:
      return { ...state, loading: false, tags: action.payload };
    case FETCH_TAGS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tags: tagsReducer,
});

export default rootReducer;
