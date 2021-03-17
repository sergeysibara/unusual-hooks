import ReactDOM from 'react-dom';
import React from 'react';

// prettier-ignore
import { Example as JSExampleOfuseStateWithUpdate }
  from './use-state-with-updaters/Example';
// prettier-ignore
import { ExampleTS as TSExampleOfuseStateWithUpdate }
  from './use-state-with-updaters/ExampleTS';

ReactDOM.unstable_createRoot(document.getElementById('root')).render(
  <div>
    <JSExampleOfuseStateWithUpdate />
    <br />
    <TSExampleOfuseStateWithUpdate />
  </div>,
);
