export const UPDATE_NAME = 'UPDATE_NAME';

export const updateName = (name, meta) => {
  return {
    type: UPDATE_NAME,
    payload: name,
    meta
  }
}

const initialState = {
  firstName: 'Matt',
};

function testReducer(state= initialState, action = {}) {
  switch (action.type) {
    case UPDATE_NAME: {
      const { payload } = action;
      const newState = {
        ...state,
        firstName: payload
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default testReducer;
