import React, { useEffect, useState } from 'react';
import { type ProviderSDK } from './types/federation-contract';
import { ButtonWorker } from './pages/ButtonWorker';

interface AppProps {
  userContext: ProviderSDK['user'];
}

const App: React.FC<AppProps> = ({ userContext }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);


  return (
    <div className="calc-wrapper">
      <header>
        <h2>Calculadora Basica</h2>
        <p>Bienvenido, {userContext.roles.includes('gestor') ? 'Gestor' : 'Colaborador'}</p>
      </header>

      <main>
        {loading ? (
          <p>Cargando provider component...</p>
        ) : (
          // <div className="calc-container">
          //   <button className="calc-button">Calcular</button>
          // </div>
          <ButtonWorker />
        )}
      </main>
    </div>
  );
};

export default App;