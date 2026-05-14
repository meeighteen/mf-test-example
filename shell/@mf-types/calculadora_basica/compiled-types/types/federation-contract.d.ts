export interface FastAccessCard {
    id: string;
    title: string;
    icon: string;
    props?: Record<string, any>;
}
export interface RouteNode {
    path: string;
    label: string;
    children?: RouteNode[];
}
export interface ProviderSDK {
    user: {
        roles: string[];
        token: string;
    };
}
export interface CalculatorProviderContract {
    getFastAccessCards: () => FastAccessCard[];
    updateRouterTree: () => RouteNode[];
    patchRoutesOnNavigation: () => Promise<any>;
    getRawCSS: () => string;
    render: (containerId: string, sdk: ProviderSDK) => void;
}
