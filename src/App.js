import './styles.css';
import * as React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { AppLayout } from './components';
import { Web3Provider } from '@ethersproject/providers';
// App.jsx
const web3Library = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};
export default function App() {
  return (
    <Web3ReactProvider getLibrary={web3Library}>
      <div className="App">
        <AppLayout />
      </div>
    </Web3ReactProvider>
  );
}
