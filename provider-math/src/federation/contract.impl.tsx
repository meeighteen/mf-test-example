import React from 'react';
import ReactDOM from 'react-dom/client';
import { type CalculatorProviderContract } from '../types/federation-contract';
import App from '../App';

const CalculatorContract: CalculatorProviderContract = {
  getFastAccessCards: () => [
    { id: 'calc-01', title: 'Calculadora Basica', icon: 'calc-icon' }
  ],
  
  updateRouterTree: () => [
    { path: '/calculadora', label: 'Inicio Calculadora' }
  ],

  getRawCSS: () => `
    .calc-wrapper { all: initial; font-family: sans-serif; }`,

  patchRoutesOnNavigation: async () => {
    return import('../routes/calculatorRoutes');
  },

  render: (containerId, sdk) => {
      const container = document.getElementById(containerId);
      
      if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(
          <React.StrictMode>
            <App 
              userContext={sdk.user} 
            />
          </React.StrictMode>
        );
      }
    }
};

export default CalculatorContract