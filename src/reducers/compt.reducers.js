import { INCREMENT_COMPT, DECREMENT_COMPT } from "../actions/compt.const";

const initstate = {
  maxCompt: 10,
  chronoCompt: 0
};

export default function reducersCompt(state = initstate, action) {
  switch (action.type) {
    case INCREMENT_COMPT:
      return { ...state, chronoCompt: state.chronoCompt + 1 };
    case DECREMENT_COMPT:
      return { ...state, chronoCompt: state.chronoCompt - 1 };
    default:
      return state;
  }
}
