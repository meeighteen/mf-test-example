import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Carga perezosa de las páginas internas para optimizar el bundle
const HomeCalculator = lazy(() => import('../pages/HomeCalculator'));

interface CalculatorRoutesProps {
  httpClient: any;
  userContext: any;
}

const CalculatorRoutes = ({ httpClient, userContext }) => {
  return (
  );
};

export default CalculatorRoutes;