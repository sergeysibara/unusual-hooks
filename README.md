### useStateWithUpdaters - userReducer alternative
[Discussion](https://github.com/reactjs/rfcs/issues/185)

TypeScript and JS versions: [Source code](src/use-state-with-updaters)

##### Usage
```jsx
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
```

### useHooksLikeDirectives - using hooks like directives 
Allows to reuse a component with different hooks without changing the code inside the component.   
Allows to decouple a component from concrete hooks.
[Source code](src/use-hooks-like-directives)
##### Usage
```jsx
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

export const Example = () => {
  return (
    <>
      <ComponentB
        hooks={[{ hook: useState, name: 'useState', params: [0] }]}
      />
    </>
  );
};
```

___

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts in the project directory
#### Standard Create React App scripts:  
`yarn start`  
`yarn build`  
`yarn eject`  
