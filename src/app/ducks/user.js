import createAction from "services/createAction";

import { get } from "services/api";

const USER_FETCH_REQUEST = createAction("USER_FETCH_REQUEST");
const USER_FETCH_SUCCESS = createAction("USER_FETCH_SUCCESS");
const USER_FETCH_FAILURE = createAction("USER_FETCH_FAILURE");

const initialState = {
  pending: false,
  error: null,
  data: {
    firstName: "John",
    lastName: "Doe",
    email: "john_doe@test.com",
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'USER_FETCH_REQUEST':
      return {
        ...state,
        pending: true,
        error: null,
      };
    case 'USER_FETCH_SUCCESS':
      return {
        ...state,
        pending: false,
        data: {
          ...payload.data
        },
      };
    case 'USER_FETCH_FAILURE':
      return {
        ...state,
        error: payload.error,
        pending: false,
      };
    default:
      return state;
  }
};

export const fetchUser = () => (dispatch) => {
  dispatch(USER_FETCH_REQUEST());
  const promise = get("/user/1");

  promise
  .then((response) => {
    dispatch(USER_FETCH_SUCCESS({ data: response.data }));
  })
  .catch((error) => {
    dispatch(USER_FETCH_FAILURE({ error: error.error }));
  });
};
