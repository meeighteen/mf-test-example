import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const mockSDK = {
//   http: {
//     get: async <T,>(url: string, config?: any): Promise<T> => {
//       console.log(`[MOCK GET] Llamada a: ${url}`, config);
//       return { data: "Resultado de calculadora básica" } as T;
//     },
//     post: async <T,>(url: string, data?: any, config?: any): Promise<T> => {
//       console.log(`[MOCK POST] Llamada a: ${url}`, data);
//       return { success: true } as T;
//     }
//   },
  user: {
    roles: ['gestor'],
    token: 'mock-token-web-empresas'
  }
};

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App 
        userContext={mockSDK.user} 
      />
    </React.StrictMode>,
  );
}