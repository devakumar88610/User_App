const INCR = 'INCR';
const DECR = 'DECR';

let incrementAction = () => {
  return {type: INCR};
};
let decrementAction = () => {
  return {type: DECR};
};

export {INCR, DECR, incrementAction, decrementAction};
