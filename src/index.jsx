import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from './utils/index';

const Header = lazy(() => import('./components/header/Header'));
const Home = lazy(() => import('./pages/Home'));
const Footer = lazy(() => import('./components/footer/Footer'));
const User = lazy(() => import('./components/product/User'));
const ProductDetail = lazy(() => import('./pages/products/ProductDetail'));
const UseDetail = lazy(() => import('./components/product/UseDetail'));

const MainRouters = () => {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<Suspense><Home/></Suspense>} />
        <Route path="/user" element={<Suspense><User/></Suspense>} />
        <Route path="/product/:id" element={<Suspense><ProductDetail/></Suspense>} />
        <Route path="/userr/:id" element={<Suspense><UseDetail/></Suspense>} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default MainRouters;
