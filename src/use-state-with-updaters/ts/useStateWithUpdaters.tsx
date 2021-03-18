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

export function useStateWithUpdaters<
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
