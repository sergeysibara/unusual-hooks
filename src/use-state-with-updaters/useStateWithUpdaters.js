import { useRef, useState } from 'react';

/**
 * Creates wrapper functions for original state updaters and
 * pass current state and arguments to original state updaters
 * @param {object} rawUpdaters
 * @param {function} updateState
 * @returns {object} wrappedUpdaters
 */
const wrapUpdaters = (rawUpdaters, updateState) => {
  return Object.entries(rawUpdaters).reduce((retObject, [method, updater]) => {
    retObject[method] = (...params) => {
      updateState((prevState) => updater(prevState, ...params));
    };
    return retObject;
  }, {});
};

/**
 * useReducer alternative
 * @param {object} defaultState
 * @param {object} rawUpdaters
 * @returns {[object, object]} [state, wrappedUpdaters]
 */
export function useStateWithUpdaters(defaultState, rawUpdaters) {
  const [state, updateState] = useState(defaultState);

  const wrappedUpdaters = useRef(null);
  if (!wrappedUpdaters.current) {
    wrappedUpdaters.current = wrapUpdaters(rawUpdaters, updateState);
  }

  return [state, wrappedUpdaters.current];
}
