import React from 'react';
import { type ProviderSDK } from './types/federation-contract';
interface AppProps {
    userContext: ProviderSDK['user'];
}
declare const App: React.FC<AppProps>;
export default App;
