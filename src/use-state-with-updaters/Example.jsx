import { useStateWithUpdaters } from './useStateWithUpdaters';

const updaters = {
  subtract: (prevState, value) => ({
    ...prevState,
    count: prevState.count - value,
  }),
  add: (prevState, value) => ({ ...prevState, count: prevState.count + value }),
};

export const Example = () => {
  const [{ count }, { add, subtract }] = useStateWithUpdaters(
    { count: 0 },
    updaters,
  );
  return (
    <div>
      Count: {count}
      <button onClick={() => subtract(1)}>-</button>
      <button onClick={() => add(1)}>+</button>
    </div>
  );
};
