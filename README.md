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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
