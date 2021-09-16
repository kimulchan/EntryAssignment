import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { ModalProvider } from './context/modalContext';
ReactDOM.render(
    <ModalProvider>
      <App />
    </ModalProvider>,
  document.getElementById('root')
);

