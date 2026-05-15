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
    <div className="calc-wrapper" style={{ fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h2>Provider App</h2>
        {/* <p>Bienvenido, {userContext.roles.includes('gestor') ? 'Gestor' : 'Colaborador'}</p> */}
      </header>

      <main>
        {loading ? (
          <p>Loading provider component...</p>
        ) : (
          <ButtonWorker />
        )}
      </main>
    </div>
  );
};

export default App;