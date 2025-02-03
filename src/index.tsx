import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './theme/icons';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { PostHogProvider } from 'posthog-js/react';

const options = {
  api_host: 'https://us.i.posthog.com',
};

ReactDOM.render(
  <React.StrictMode>
    <PostHogProvider
      apiKey="phc_MRdNJPQZCtcnauf4euDYm1PrVh3kTo7ZNSuK5GyRNtR"
      options={options}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
