
import {extend} from "../../utils.js";

const initialState = {
    isTasksPopup: false
};

const actionType = {
    SHOW_POPUP: `SHOW_POPUP`,
};

const actionCreator = {
  showPopup: (isPopup) => {
    return {
      type: actionType.SHOW_POPUP,
      payload: isPopup,
    };
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SHOW_POPUP:
      return extend(state, {isTasksPopup: action.payload});
    default:
      return state;
  }
};

export {reducer, actionType, actionCreator};
