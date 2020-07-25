import { LaunchAPI, API } from './LaunchAPI/index';

const types = {
  FETCH_ALL: 'FETCH_ALL',
  FETCH_OK: 'FETCH_OK',
  FETCH_ERR: 'FETCH_ERR',
};

export const actions = {
  fetchOK: (data) => {
    return { type: types.FETCH_OK, data };
  },

  fetchData: () => {
    return (dispatch) => {
      API.get()
        .then((data) => {
          dispatch(actions.fetchOK(data.data));
        })
        .catch((err) => alert(err));
    };
  },
};

const initialState = {
  launches: null,
};

export const reducer = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case types.FETCH_OK:
      return { ...state, launches: data.result};
    default:
      return { ...state };
  }
};
