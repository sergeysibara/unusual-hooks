import ReactDOM from 'react-dom';
import React from 'react';

// prettier-ignore
import { Example as JSExampleOfUseStateWithUpdate }
  from './use-state-with-updaters/Example';
// prettier-ignore
import { Example as TSExampleOfUseStateWithUpdate }
  from './use-state-with-updaters/ts/Example';
// prettier-ignore
import { Example as ExampleOfUseHooksLikeDirectives }
  from './use-hooks-like-directives/Example';

ReactDOM.unstable_createRoot(document.getElementById('root')).render(
  <div>
    <JSExampleOfUseStateWithUpdate />
    <br />
    <TSExampleOfUseStateWithUpdate />

    <br />
    <ExampleOfUseHooksLikeDirectives />
  </div>,
);
