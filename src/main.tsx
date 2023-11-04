import './index.css';

import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </React.StrictMode>
);
