// eslint-disable-next-line import/prefer-default-export
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH':
      return {
        ...state,
        auth: !action.payload,
      };
    default:
      break;
  }
};
