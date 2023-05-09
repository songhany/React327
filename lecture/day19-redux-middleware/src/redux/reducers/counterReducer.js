import { ADD_COUNT, ASYNC_ADD, MINUS_COUNT } from "../actions";
import myWait from "../../util/myWait"

export default function counterReducer(
  state = {
    value: 0,
  },
  action
) {
  switch (action.type) {
    case ADD_COUNT:
      return { value: state.value + 1 };
      
    case MINUS_COUNT:
      return { value: state.value - 1 };

    case ASYNC_ADD:
      setTimeout(() => {
        return { value: state.value + 1 };
      }, 1000);

    default:
      return state;
  }
}

export function addCount() {
  return { type: ADD_COUNT };
}

export function minusCount() {
  return { type: MINUS_COUNT };
}

export function asyncAddCount() {
  return async (dispatch) => {
    await myWait(1000);
    dispatch(addCount());
  };
}