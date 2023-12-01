const commonReducres = function (state = 0, action) {
    switch (action.type) {
      case "USER_DETAILS":
        return {...state, userDetailes: action.data || {}};
        case "ACTIVE_STEP":
        return {...state, activeStep: action.data || 0};
      default:
        return state;
    }
  };

export default commonReducres;