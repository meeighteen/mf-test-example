import { useEffect } from 'react';
import { useRemoteMathApp } from './hooks/useRemoteMathApp';

const App = () => {
  const { contract, loading } = useRemoteMathApp();

  // Orquestación del renderizado
  useEffect(() => {
    if (contract && document.getElementById('calculator-root')) {
      contract.render('calculator-root', {
        user: { roles: ['gestor'], token: 'abc' }
      });
    }
  }, [contract]);

  return (
    <div style={{ padding: '20px', border: '5px solid red', fontFamily: 'Arial, sans-serif' }}> 
      <h1>Hello from the Consumer App</h1>

      {loading && <p>Loading Provider component...</p>}
      
      {!loading && !contract && (
        <p style={{ color: 'orange' }}>
          The Provider is Loaded. But the contract is not available. Please check the connection and try again..
        </p>
      )}

      <div id="calculator-root" style={{ border: '2px solid blue', padding: '10px' }} />
    </div>
  );
};

export default App;