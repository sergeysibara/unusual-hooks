import { useHooksLikeDirectives } from './useHookLikeDirectives';
import { useEffect, useState } from 'react';

export const ComponentA = (props) => {
  const hooksRetData = useHooksLikeDirectives(props);
  const [count, setCount] = hooksRetData.useState;

  return (
    <>
      <h3>Example A of useHooksLikeDirectives hook:</h3>
      <p>state value: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </>
  );
};

export const ComponentB = (props) => {
  const hooksRetData = useHooksLikeDirectives(props);
  const [count, setCount] = hooksRetData.useState;
  return (
    <>
      <h3>Example B of useHooksLikeDirectives hook:</h3>
      <p>state value: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </>
  );
};

const hooksConfigForComponentA = [
  { hook: useState, name: 'useState', params: [0] },
  {
    hook: useEffect,
    name: 'useEffect',
    params: [
      () => {
        console.log('effect start');
        return () => {
          console.log('effect end');
        };
      },
      [],
    ],
  },
];

export const Example = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div>
        Show useHooksLikeDirectives examples: <br />
        <input
          type="checkbox"
          checked={visible}
          onChange={() => {
            setVisible(!visible);
          }}
        />
      </div>
      {visible && (
        <>
          <ComponentA hooks={hooksConfigForComponentA} />
          <ComponentB
            hooks={[{ hook: useState, name: 'useState', params: [10] }]}
          />
        </>
      )}
    </>
  );
};
