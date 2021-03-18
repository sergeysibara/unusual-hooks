import { useStateWithUpdaters } from './useStateWithUpdaters';

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

export const Example = () => {
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
