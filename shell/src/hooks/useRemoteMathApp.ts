import { useState, useEffect } from 'react';
import { type CalculatorProviderContract } from '../types/federation-contract';

export const useRemoteMathApp = () => {
  const [contract, setContract] = useState<CalculatorProviderContract | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModule = async () => {
      try {
        const module = await import('calculadora_basica/Contract');
        const remoteModule = module.default as CalculatorProviderContract;

        if (!remoteModule) {
          throw new Error("El módulo remoto no exporta un contrato válido.");
        }

        const styles = remoteModule.getRawCSS();
        if (typeof styles === 'string') {
            const styleTag = document.getElementById('theme-calculadora-basica') || document.createElement('style');
            styleTag.id = 'theme-calculadora-basica';
            styleTag.innerHTML = styles;
            document.head.appendChild(styleTag);
        } else {
            console.warn("El mundo no proporcionó estilos válidos (getRawCSS).");
        }

        const routes = remoteModule.updateRouterTree();
        console.log("Rutas registradas para el mundo calculadora:", routes);

        setContract(remoteModule);
      } catch (error) {
        console.error("Error en la orquestación del Shell:", error);
        setContract(null);
      } finally {
        setLoading(false);
      }
    };

    loadModule();
  }, []);

  return { contract, loading };
};