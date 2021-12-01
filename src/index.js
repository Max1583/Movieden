import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {  BrowserRouter as Router } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
Sentry.init({
  dsn: "https://1959027f45de48e39f08a27211c74c3f@o1070885.ingest.sentry.io/6067294",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
ReactDOM.render(
 
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
);

// 