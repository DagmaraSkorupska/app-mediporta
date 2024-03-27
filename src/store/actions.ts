import { TagsModel } from "../models";

export const FETCH_TAGS_REQUEST = "FETCH_TAGS_REQUEST";
export const FETCH_TAGS_SUCCESS = "FETCH_TAGS_SUCCESS";
export const FETCH_TAGS_FAILURE = "FETCH_TAGS_FAILURE";

export const fetchTagsRequest = () => ({
  type: FETCH_TAGS_REQUEST,
});

export const fetchTagsSuccess = (tags: TagsModel[]) => ({
  type: FETCH_TAGS_SUCCESS,
  payload: tags,
});

export const fetchTagsFailure = (error: string) => ({
  type: FETCH_TAGS_FAILURE,
  payload: error,
});
