
    export type RemoteKeys = 'calculadora_basica/Contract' | 'calculadora_basica/App';
    type PackageType<T> = T extends 'calculadora_basica/App' ? typeof import('calculadora_basica/App') :T extends 'calculadora_basica/Contract' ? typeof import('calculadora_basica/Contract') :any;