import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css'
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd'
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorPage from './page/errorPage';
import Pages from './page/pages';

const queryClient = new QueryClient

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Pages/>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
