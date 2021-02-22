// eslint-disable-next-line import/prefer-default-export
export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload,
      };
    case 'RESET':
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
