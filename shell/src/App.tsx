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
    <div style={{ padding: '20px', border: '5px solid red' }}> 
      <h1>Hola desde el shell</h1>

      {loading && <p>Cargando calculadora...</p>}
      
      {!loading && !contract && (
        <p style={{ color: 'orange' }}>
          El Shell cargó, pero la calculadora falló. Revisa el puerto 3000.
        </p>
      )}

      <div id="calculator-root" style={{ border: '1px solid blue', minHeight: '100px' }} />
    </div>
  );
};

export default App;