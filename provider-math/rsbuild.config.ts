import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  server: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  output: {
    assetPrefix: 'http://localhost:3000/', 
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'calculadora_basica',
      exposes: {
        './Contract': './src/federation/contract.impl.tsx',
        './App': './src/App.tsx',
      },
      shared: ['react', 'react-dom']
    })
  ]
});
