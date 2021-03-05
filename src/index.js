import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./tailwind.css"
import App from './components/app/App';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
