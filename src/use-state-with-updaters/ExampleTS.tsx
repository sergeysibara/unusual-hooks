import { useRef, useState, Dispatch, SetStateAction } from 'react';

interface IObject {
  [key: string]: unknown;
}

interface IUpdater<T extends IObject> {
  (...params: any[]): T;
}

interface IUpdaterDictionary<T extends IObject> {
  [key: string]: IUpdater<T>;
}

interface IWrappedUpdater {
  (...params: any[]): void;
}

interface IWrappedUpdaterDictionary {
  [key: string]: IWrappedUpdater;
}

function wrapUpdaters<
  TState extends IObject,
  TUpdaters extends IUpdaterDictionary<TState>
>(rawUpdaters: TUpdaters, updateState: Dispatch<SetStateAction<TState>>) {
  return Object.entries(rawUpdaters).reduce((retObject, [method, updater]) => {
    retObject[method] = (...params) => {
      updateState((prevState) => updater(prevState, ...params));
    };
    return retObject;
  }, {} as IWrappedUpdaterDictionary);
}

function useStateWithUpdaters<
  TState extends IObject,
  TUpdaters extends IUpdaterDictionary<TState>
>(
  defaultState: TState,
  rawUpdaters: TUpdaters,
): [TState, IWrappedUpdaterDictionary] {
  const [state, updateState] = useState(defaultState);

  const wrappedUpdaters = useRef<IWrappedUpdaterDictionary | null>(null);
  if (!wrappedUpdaters.current) {
    wrappedUpdaters.current = wrapUpdaters<TState, TUpdaters>(
      rawUpdaters,
      updateState,
    );
  }

  return [state, wrappedUpdaters.current];
}

// USING EXAMPLE:

interface ICounterState {
  count: number;
}

const updaters = {
  subtract: (prevState: ICounterState, value: number) => ({
    ...prevState,
    count: prevState.count - value,
  }),
  add: (prevState: ICounterState, value: number) => ({
    ...prevState,
    count: prevState.count + value,
  }),
};

export const ExampleTS = () => {
  const [{ count }, { subtract, add }] = useStateWithUpdaters(
    { count: 0 },
    updaters,
  );
  return (
    <div>
      TypeScript. Count: {count}
      <button onClick={() => subtract(1)}>-</button>
      <button onClick={() => add(1)}>+</button>
    </div>
  );
};
