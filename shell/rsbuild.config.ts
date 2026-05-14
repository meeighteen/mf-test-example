import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
   server: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    assetPrefix: 'http://localhost:3001/', 
  },
  plugins: [pluginReact(),
    pluginModuleFederation({
      name: 'shell',
      remotes: {
        calculadora_basica: 'calculadora_basica@http://localhost:3000/mf-manifest.json',
      },
      dts: true,
      shared: ['react', 'react-dom'],
    }),
    ],
});
