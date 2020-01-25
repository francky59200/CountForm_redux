import * as comptConst from "./compt.const";

export const incrementer = () => ({
  type: comptConst.INCREMENT_COMPT
});

export const decrementer = () => ({
  type: comptConst.DECREMENT_COMPT
});
